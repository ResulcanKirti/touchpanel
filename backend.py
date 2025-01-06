from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from werkzeug.security import generate_password_hash, check_password_hash
from flask_cors import CORS
import uuid

app = Flask(__name__)
CORS(app)  # CORS'u etkinleştir
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
ma = Marshmallow(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(100), nullable=False)
    key = db.Column(db.String(36), nullable=False)

class Key(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    value = db.Column(db.String(36), unique=True, nullable=False)

class UserSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = User

class KeySchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Key

user_schema = UserSchema()
users_schema = UserSchema(many=True)
key_schema = KeySchema()
keys_schema = KeySchema(many=True)

with app.app_context():
    db.create_all()

def create_user_common(data):
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')
    key_value = data.get('key')

    if not username or not email or not password or not key_value:
        return jsonify({'message': 'Eksik bilgi'}), 400

    if User.query.filter_by(email=email).first():
        return jsonify({'message': 'Email zaten kullanılıyor'}), 400

    key = Key.query.filter_by(value=key_value).first()
    if not key:
        return jsonify({'message': 'Geçersiz anahtar'}), 400

    hashed_password = generate_password_hash(password, method='pbkdf2:sha256')
    user = User(name=username, email=email, password=hashed_password, key=key_value)
    db.session.add(user)
    db.session.commit()

    db.session.delete(key)
    db.session.commit()

    return jsonify({'message': 'Kullanıcı başarıyla oluşturuldu'}), 200

@app.route('/admin/create-user', methods=['POST'])
def create_user():
    data = request.get_json()
    return create_user_common(data)

@app.route('/admin/create-key', methods=['POST'])
def create_key():
    """Admin anahtar oluşturur"""
    new_key = str(uuid.uuid4()) 
    key = Key(value=new_key)
    db.session.add(key)
    db.session.commit()
    return jsonify({'message': 'Anahtar başarıyla oluşturuldu', 'key': new_key})

@app.route('/register', methods=['POST'])
def register():
    """Kullanıcı kaydı"""
    data = request.json
    return create_user_common(data)

@app.route('/admin/users', methods=['GET'])
def get_users():
    users = User.query.all()
    user_list = [{'name': user.name, 'email': user.email, 'key': user.key} for user in users]
    return jsonify(user_list), 200

@app.route('/keys', methods=['GET'])
def get_keys():
    """Oluşturulan anahtarları listele (Admin erişimi için)"""
    keys = Key.query.all()
    return jsonify(keys_schema.dump(keys))

if __name__ == '__main__':
    app.run(debug=True)