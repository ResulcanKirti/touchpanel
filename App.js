import React, { useState } from 'react';
import { Container, Tab, Tabs, Button, Form } from 'react-bootstrap';
import { CheckCircleFill } from 'react-bootstrap-icons'; // Import icon

function App() {
  const [activeTab, setActiveTab] = useState('panelType');

  // States for Panel Type
  const [panelType, setPanelType] = useState(null);
  const [isPanelTypeComplete, setIsPanelTypeComplete] = useState(false);

  // States for Protocol
  const [protocol, setProtocol] = useState(null);
  const [isProtocolComplete, setIsProtocolComplete] = useState(false);

  // States for Panel Size
  const [panelSize, setPanelSize] = useState(null);
  const [isPanelSizeComplete, setIsPanelSizeComplete] = useState(false);

  // State for Panel Color (default to Black "B")
  const [panelColor, setPanelColor] = useState('B');
  const [isPanelColorComplete, setIsPanelColorComplete] = useState(false);

  // State for Layout Selection
  const [layouts, setLayouts] = useState({
    panel1: '',
    panel2: '',
    panel3: '',
  });

  // Handle Next button click for Panel Type
  const handleNextPanelType = () => {
    if (panelType) {
      setIsPanelTypeComplete(true);
      setActiveTab('protocol'); // Move to Protocol tab
    }
  };

  // Handle Next button click for Protocol
  const handleNextProtocol = () => {
    if (protocol) {
      setIsProtocolComplete(true);
      setActiveTab('panelSize'); // Move to Panel Size tab
    }
  };

  // Handle Next button click for Panel Size
  const handleNextPanelSize = () => {
    if (panelSize) {
      setIsPanelSizeComplete(true);
      setActiveTab('panelColor'); // Move to Panel Color tab
    }
  };

  // Handle Next button click for Panel Color
  const handleNextPanelColor = () => {
    if (panelColor) {
      setIsPanelColorComplete(true);
      setActiveTab('panelLayout'); // Move to the next tab (Panel Layout)
    }
  };

  // Function to render check icon if the tab is completed
  const renderTabTitle = (title, isComplete) => (
    <>
      {title} {isComplete && <CheckCircleFill style={{ color: 'white', backgroundColor: '#c1082e', borderRadius: '50%', padding: '2px' }} />}
    </>
  );

  // Function to determine the background color for the selected SVG
  const getPanelBackgroundColor = () => {
    switch (panelColor) {
      case 'B':
        return 'black';
      case 'W':
        return 'white';
      case 'G':
        return 'grey';
      case 'Red':
        return '#c1082e';
      default:
        return 'transparent';
    }
  };

  // Function to determine the stroke color for the cls-1 and cls-2 rectangles
  const getStrokeColor = () => {
    return panelColor === 'W' ? 'black' : 'white';
  };

  // Handle Layout Selection for Individual Panels
  const handleLayoutSelection = (panel, value) => {
    setLayouts((prev) => ({
      ...prev,
      [panel]: value,
    }));
  };

  // Render a single panel with or without the selected layout
  const renderPanelWithLayout = (panelLayout) => {
    return (
      <>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 258 258" width="200px" height="200px">
          <defs>
            <style>
              {`.cls-1 {
                fill: ${getPanelBackgroundColor()};
                stroke: ${getStrokeColor()};
              }
              .cls-2 {
                fill: none;
                stroke: ${getStrokeColor()};
                stroke-miterlimit: 10;
                stroke-width: 1.1px;
              }`}
            </style>
          </defs>
          <g>
            <g id="katman_1">
              <rect className="cls-1" x="0" width="258" height="258" rx="14.2" ry="14.2"/>
              {/* Render layout 6.0 */}
              {panelLayout === 'layout6.0' && (
                <>
                  <rect className="cls-2" x="31.5" y="48.8" width="84.8" height="33.6" rx="5.7" ry="5.7"/>
                  <rect className="cls-2" x="31.5" y="112.2" width="84.8" height="33.6" rx="5.7" ry="5.7"/>
                  <rect className="cls-2" x="31.5" y="175.5" width="84.8" height="33.6" rx="5.7" ry="5.7"/>
                  <rect className="cls-2" x="141.9" y="48.8" width="84.8" height="33.6" rx="5.7" ry="5.7"/>
                  <rect className="cls-2" x="141.9" y="112.2" width="84.8" height="33.6" rx="5.7" ry="5.7"/>
                  <rect className="cls-2" x="141.9" y="175.5" width="84.8" height="33.6" rx="5.7" ry="5.7"/>
                </>
              )}
              {/* Render layout 7.0 */}
              {panelLayout === 'layout7.0' && (
                <>
                  <rect className="cls-2" x="31.9" y="30.8" width="84.8" height="33.6" rx="5.7" ry="5.7"/>
                  <rect className="cls-2" x="31.9" y="85" width="84.8" height="33.6" rx="5.7" ry="5.7"/>
                  <rect className="cls-2" x="31.9" y="139.3" width="84.8" height="33.6" rx="5.7" ry="5.7"/>
                  <rect className="cls-2" x="31.9" y="193.5" width="84.8" height="33.6" rx="5.7" ry="5.7"/>
                  <rect className="cls-2" x="141.2" y="30.8" width="84.8" height="33.6" rx="5.7" ry="5.7"/>
                  <rect className="cls-2" x="141.2" y="85" width="84.8" height="33.6" rx="5.7" ry="5.7"/>
                  <rect className="cls-2" x="141.2" y="193.5" width="84.8" height="33.6" rx="5.7" ry="5.7"/>
                </>
              )}

              {/* Render layout 8.0 */}
              {panelLayout === 'layout8.0' && (
                <>
                  <rect className="cls-2" x="31.9" y="30.8" width="84.8" height="33.6" rx="5.7" ry="5.7"/>
                  <rect className="cls-2" x="31.9" y="85" width="84.8" height="33.6" rx="5.7" ry="5.7"/>
                  <rect className="cls-2" x="31.9" y="139.3" width="84.8" height="33.6" rx="5.7" ry="5.7"/>
                  <rect className="cls-2" x="31.9" y="193.5" width="84.8" height="33.6" rx="5.7" ry="5.7"/>
                  <rect className="cls-2" x="141.2" y="30.8" width="84.8" height="33.6" rx="5.7" ry="5.7"/>
                  <rect className="cls-2" x="141.2" y="85" width="84.8" height="33.6" rx="5.7" ry="5.7"/>
                  <rect className="cls-2" x="141.2" y="139.3" width="84.8" height="33.6" rx="5.7" ry="5.7"/>
                  <rect className="cls-2" x="141.2" y="193.5" width="84.8" height="33.6" rx="5.7" ry="5.7"/>
                </>
              )}

              {/* Render layout 8.1 */}
              {panelLayout === 'layout8.1' && (
                <>
                  <rect className="cls-2" x="31.9" y="30.8" width="84.8" height="33.6" rx="5.7" ry="5.7"/>
                  <rect className="cls-2" x="31.9" y="71.5" width="84.8" height="33.6" rx="5.7" ry="5.7"/>
                  <rect className="cls-2" x="31.9" y="112.2" width="84.8" height="33.6" rx="5.7" ry="5.7"/>
                  <rect className="cls-2" x="31.9" y="152.8" width="84.8" height="33.6" rx="5.7" ry="5.7"/>
                  <rect className="cls-2" x="31.9" y="193.5" width="84.8" height="33.6" rx="5.7" ry="5.7"/>
                  <rect className="cls-2" x="141.2" y="30.8" width="84.8" height="33.6" rx="5.7" ry="5.7"/>
                  <rect className="cls-2" x="141.2" y="71.5" width="84.8" height="33.6" rx="5.7" ry="5.7"/>
                  <rect className="cls-2" x="141.2" y="153.7" width="84.8" height="73" rx="5.7" ry="5.7"/>
                </>
              )}

              {/* Render layout 10 */}
              {panelLayout === 'layout10' && (
                <>
                  <rect className="cls-2" x="31.9" y="30.8" width="84.8" height="33.6" rx="5.7" ry="5.7"/>
                  <rect className="cls-2" x="31.9" y="71.5" width="84.8" height="33.6" rx="5.7" ry="5.7"/>
                  <rect className="cls-2" x="31.9" y="112.2" width="84.8" height="33.6" rx="5.7" ry="5.7"/>
                  <rect className="cls-2" x="31.9" y="152.8" width="84.8" height="33.6" rx="5.7" ry="5.7"/>
                  <rect className="cls-2" x="31.9" y="193.5" width="84.8" height="33.6" rx="5.7" ry="5.7"/>
                  <rect className="cls-2" x="141.2" y="30.8" width="84.8" height="33.6" rx="5.7" ry="5.7"/>
                  <rect className="cls-2" x="141.2" y="71.5" width="84.8" height="33.6" rx="5.7" ry="5.7"/>
                  <rect className="cls-2" x="141.2" y="112.2" width="84.8" height="33.6" rx="5.7" ry="5.7"/>
                  <rect className="cls-2" x="141.2" y="152.8" width="84.8" height="33.6" rx="5.7" ry="5.7"/>
                  <rect className="cls-2" x="141.2" y="193.5" width="84.8" height="33.6" rx="5.7" ry="5.7"/>
                </>
              )}

              {/* Render layout 1 */}
              {panelLayout === 'layout1.0' && (
                <>
                  <rect className="cls-2" x="93.5" y="93.5" width="70.9" height="70.9" rx="5.7" ry="5.7"/>
                </>
              )}
              {/* Render layout 2.0 */}
              {panelLayout === 'layout2.0' && (
                <>
                  <rect className="cls-2" x="93.5" y="43.1" width="70.9" height="70.9" rx="5.7" ry="5.7"/>
                  <rect className="cls-2" x="93.5" y="144" width="70.9" height="70.9" rx="5.7" ry="5.7"/>
                </>
              )}
              {/* Render layout 3.0 */}
              {panelLayout === 'layout3.0' && (
                <>
                  <rect className="cls-2" x="86.6" y="48.8" width="84.8" height="33.6" rx="5.7" ry="5.7"/>
                  <rect className="cls-2" x="86.6" y="112.2" width="84.8" height="33.6" rx="5.7" ry="5.7"/>
                  <rect className="cls-2" x="86.6" y="175.5" width="84.8" height="33.6" rx="5.7" ry="5.7"/>
                </>
              )}
              {/* Render layout 4.0 */}
              {panelLayout === 'layout4.0' && (
                <>
                  <rect className="cls-2" x="43.5" y="43.1" width="70.9" height="70.9" rx="5.7" ry="5.7"/>
                  <rect className="cls-2" x="144" y="144" width="70.9" height="70.9" rx="5.7" ry="5.7"/>
                  <rect className="cls-2" x="144" y="43.1" width="70.9" height="70.9" rx="5.7" ry="5.7"/>
                  <rect className="cls-2" x="43.5" y="144" width="70.9" height="70.9" rx="5.7" ry="5.7"/>
                </>
              )}
            </g>
          </g>
        </svg>
      </>
    );
  };

  return (
    <Container fluid className="p-3 custom-container">
      <style>
        {`
          input[type="radio"] {
            accent-color: #c1082e;
          }
        `}
      </style>
      <Tabs 
        activeKey={activeTab} 
        onSelect={(k) => setActiveTab(k)} 
        id="tabbed-interface" 
        className="mb-3 custom-tabs"
        style={{ color: activeTab === 'panelType' || activeTab === 'protocol' || activeTab === 'panelSize' || activeTab === 'panelColor' ? '#000000' : '#000000' }} // Inline style for the tabs
      >
        {/* Panel Type Tab */}
        <Tab eventKey="panelType" title={renderTabTitle('Panel Type', isPanelTypeComplete)}>
          <h3>Panel Type</h3>
          <p>Select the type of panel you want to use in your configuration.</p>
          
          {/* Radio Button Options for Panel Type */}
          <Form className="custom-radio">
          <Form.Check 
    type="radio" 
    label="Plexy Panel" 
    id="P" 
    name="panelType" 
    value="P" 
    onChange={(e) => setPanelType(e.target.value)} 
    checked={panelType === 'P'}
   
  />
           <Form.Check 
    type="radio" 
    label="Glass Panel" 
    id="G" 
    name="panelType" 
    value="G" 
    onChange={(e) => setPanelType(e.target.value)} 
    checked={panelType === 'G'}

  />
</Form>

          {/* Next Button for Panel Type */}
          <Button 
            onClick={handleNextPanelType} 
            disabled={!panelType} /* Disable until a panel type is selected */
            className="custom-next-btn"
             style={{ backgroundColor: '#c1082e', border: 'none', color: 'white' }} /* Inline styles as fallback */
          >
            Next
          </Button>
        </Tab>

        {/* Protocol Tab */}
        <Tab eventKey="protocol" title={renderTabTitle('Protocol', isProtocolComplete)} disabled={!isPanelTypeComplete}>
          <h3>Protocol</h3>
          <p>Select the communication protocol for your panel.</p>
          
          {/* Radio Button Options for Protocol */}
          <Form>
            <Form.Check 
              type="radio" 
              label="Elekon" 
              id="E" 
              name="protocol" 
              value="E" 
              onChange={(e) => setProtocol(e.target.value)} 
              checked={protocol === 'E'}
            />
            <Form.Check 
              type="radio" 
              label="Helvar" 
              id="H" 
              name="protocol" 
              value="H" 
              onChange={(e) => setProtocol(e.target.value)} 
              checked={protocol === 'H'}
            />
            <Form.Check 
              type="radio" 
              label="DALI-2" 
              id="D" 
              name="protocol" 
              value="D" 
              onChange={(e) => setProtocol(e.target.value)} 
              checked={protocol === 'D'}
            />
          </Form>

          {/* Next Button for Protocol */}
          <Button 
            onClick={handleNextProtocol} 
            disabled={!protocol} /* Disable until a protocol is selected */
            className="custom-next-btn"
            style={{ backgroundColor: '#c1082e', color: 'white', border: 'none' }} // Inline style for the button
          >
            Next
          </Button>
        </Tab>

        {/* Panel Size Tab */}
        <Tab eventKey="panelSize" title={renderTabTitle('Panel Size', isPanelSizeComplete)} disabled={!isProtocolComplete}>
          <h3>Panel Size</h3>
          <p>Select the size of the panel.</p>

          {/* Radio Button Options for Panel Size */}
          <Form>
            <Form.Check 
              type="radio" 
              label="Single Panel" 
              id="S" 
              name="panelSize" 
              value="S" 
              onChange={(e) => setPanelSize(e.target.value)} 
              checked={panelSize === 'S'}
            />
            <Form.Check 
              type="radio" 
              label="Multiple Panel" 
              id="M" 
              name="panelSize" 
              value="M" 
              onChange={(e) => setPanelSize(e.target.value)} 
              checked={panelSize === 'M'}
            />
            <Form.Check 
              type="radio" 
              label="Triple Panel" 
              id="T" 
              name="panelSize" 
              value="T" 
              onChange={(e) => setPanelSize(e.target.value)} 
              checked={panelSize === 'T'}
            />
          </Form>

          {/* Display the corresponding number of empty.svg images */}
          <div className="mt-3">
            {panelSize === 'S' && <img src="/assets/images/empty.svg" alt="Single Panel" style={{ width: '200px', height: '200px' }} />}
            {panelSize === 'M' && (
              <div className="d-flex">
                <img src="/assets/images/empty.svg" alt="Multiple Panel" style={{ width: '200px', height: '200px', marginRight: '10px' }} />
                <img src="/assets/images/empty.svg" alt="Multiple Panel" style={{ width: '200px', height: '200px' }} />
              </div>
            )}
            {panelSize === 'T' && (
              <div className="d-flex">
                <img src="/assets/images/empty.svg" alt="Triple Panel" style={{ width: '200px', height: '200px', marginRight: '10px' }} />
                <img src="/assets/images/empty.svg" alt="Triple Panel" style={{ width: '200px', height: '200px', marginRight: '10px' }} />
                <img src="/assets/images/empty.svg" alt="Triple Panel" style={{ width: '200px', height: '200px' }} />
              </div>
            )}
          </div>

          {/* Next Button for Panel Size */}
          <Button 
            onClick={handleNextPanelSize} 
            disabled={!panelSize} /* Disable until a panel size is selected */
            className="custom-next-btn"
             style={{ backgroundColor: '#c1082e', border: 'none', color: 'white' }} /* Inline styles as fallback */
          >
          
            Next
          </Button>
        </Tab>

        {/* Panel Color Tab */}
        <Tab eventKey="panelColor" title={renderTabTitle('Panel Color', isPanelColorComplete)} disabled={!isPanelSizeComplete}>
          <h3>Panel Color</h3>
          <p>Select the background color for the panel. By default, black is selected.</p>

          {/* Display the corresponding inline SVG images with dynamic fill color */}
          <div className="mt-3">
            {panelSize === 'S' && (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 258 258" width="200px" height="200px" style={{ color: getPanelBackgroundColor() }}>
                <rect className="cls-1" width="258" height="258" rx="14.2" ry="14.2" fill="currentColor" stroke={getStrokeColor()} />
              </svg>
            )}
            {panelSize === 'M' && (
              <div className="d-flex">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 258 258" width="200px" height="200px" style={{ color: getPanelBackgroundColor(), marginRight: '10px' }}>
                  <rect className="cls-1" width="258" height="258" rx="14.2" ry="14.2" fill="currentColor" stroke={getStrokeColor()} />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 258 258" width="200px" height="200px" style={{ color: getPanelBackgroundColor() }}>
                  <rect className="cls-1" width="258" height="258" rx="14.2" ry="14.2" fill="currentColor" stroke={getStrokeColor()} />
                </svg>
              </div>
            )}
            {panelSize === 'T' && (
              <div className="d-flex">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 258 258" width="200px" height="200px" style={{ color: getPanelBackgroundColor(), marginRight: '10px' }}>
                  <rect className="cls-1" width="258" height="258" rx="14.2" ry="14.2" fill="currentColor" stroke={getStrokeColor()} />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 258 258" width="200px" height="200px" style={{ color: getPanelBackgroundColor(), marginRight: '10px' }}>
                  <rect className="cls-1" width="258" height="258" rx="14.2" ry="14.2" fill="currentColor" stroke={getStrokeColor()} />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 258 258" width="200px" height="200px" style={{ color: getPanelBackgroundColor() }}>
                  <rect className="cls-1" width="258" height="258" rx="14.2" ry="14.2" fill="currentColor" stroke={getStrokeColor()} />
                </svg>
              </div>
            )}
          </div>

          {/* Radio Button Options for Panel Color */}
          <Form className="mt-3">
            <Form.Check 
              type="radio" 
              label="Black" 
              id="B" 
              name="panelColor" 
              value="B" 
              onChange={(e) => setPanelColor(e.target.value)} 
              checked={panelColor === 'B'}
            />
            <Form.Check 
              type="radio" 
              label="White" 
              id="W" 
              name="panelColor" 
              value="W" 
              onChange={(e) => setPanelColor(e.target.value)} 
              checked={panelColor === 'W'}
            />
            <Form.Check 
              type="radio" 
              label="Grey" 
              id="G" 
              name="panelColor" 
              value="G" 
              onChange={(e) => setPanelColor(e.target.value)} 
              checked={panelColor === 'G'}
            />
            <Form.Check 
              type="radio" 
              label="Red" 
              id="Red" 
              name="panelColor" 
              value="Red" 
              onChange={(e) => setPanelColor(e.target.value)} 
              checked={panelColor === 'Red'}
            />
          </Form>

          {/* Next Button for Panel Color */}
          <Button 
            onClick={handleNextPanelColor} 
            disabled={!panelColor} /* Disable until a panel color is selected */
            className="custom-next-btn"
            style={{ backgroundColor: '#c1082e', border: 'none', color: 'white' }} /* Inline styles as fallback */
         >
          
            Next
          </Button>
        </Tab>

        {/* Panel Layout Tab */}
        <Tab eventKey="panelLayout" title="Panel Layout" disabled={!isPanelColorComplete}>
          <h3>Panel Layout</h3>
          <p>Select a layout for each panel.</p>

{/* Conditionally render layout selection for each panel */}
{panelSize === 'S' && (
  <>
    <Form.Group controlId="layoutSelectionPanel1" className="mb-4"> 
      <Form.Label>Select Layout for Panel 1</Form.Label>
      <Form.Control 
        as="select" 
        value={layouts.panel1} 
        onChange={(e) => handleLayoutSelection('panel1', e.target.value)}
        className="custom-dropdown"  // Custom class for dropdown
      >
        <option value="">Select Layout</option>
        <option value="layout1.0">Layout 1.0</option>
        <option value="layout2.0">Layout 2.0</option>
        <option value="layout3.0">Layout 3.0</option>
        <option value="layout4.0">Layout 4.0</option>
        <option value="layout6.0">Layout 6.0</option>
        <option value="layout7.0">Layout 7.0</option>
        <option value="layout8.0">Layout 8.0</option>
        <option value="layout8.1">Layout 8.1</option>
        <option value="layout10">Layout 10</option>
      </Form.Control>
    </Form.Group>

    <div className="panel-container"> {/* Add margin here */}
      {renderPanelWithLayout(layouts.panel1)}
    </div>
  </>
)}



          {panelSize === 'M' && (
            <div className="d-flex">
              <div className="me-3">
                <Form.Group controlId="layoutSelectionPanel1">
                  <Form.Label>Select Layout for Panel 1</Form.Label>
                  <Form.Control as="select" value={layouts.panel1} onChange={(e) => handleLayoutSelection('panel1', e.target.value)}>
                    <option value="">Select Layout</option>
                    <option value="layout1.0">Layout 1.0</option>
                    <option value="layout2.0">Layout 2.0</option>
                    <option value="layout3.0">Layout 3.0</option>
                    <option value="layout4.0">Layout 4.0</option>
                    <option value="layout6.0">Layout 6.0</option>
                    <option value="layout7.0">Layout 7.0</option>
                    <option value="layout8.0">Layout 8.0</option>
                    <option value="layout8.1">Layout 8.1</option>
                    <option value="layout10">Layout 10</option>
                  </Form.Control>
                </Form.Group>
                {/* Render the panel with selected color and layout */}
                {renderPanelWithLayout(layouts.panel1)}
              </div>
              <div>
                <Form.Group controlId="layoutSelectionPanel2">
                  <Form.Label>Select Layout for Panel 2</Form.Label>
                  <Form.Control as="select" value={layouts.panel2} onChange={(e) => handleLayoutSelection('panel2', e.target.value)}>
                    <option value="">Select Layout</option>
                    <option value="layout1.0">Layout 1.0</option>
                    <option value="layout2.0">Layout 2.0</option>
                    <option value="layout3.0">Layout 3.0</option>
                    <option value="layout4.0">Layout 4.0</option>
                    <option value="layout6.0">Layout 6.0</option>
                    <option value="layout7.0">Layout 7.0</option>
                    <option value="layout8.0">Layout 8.0</option>
                    <option value="layout8.1">Layout 8.1</option>
                    <option value="layout10">Layout 10</option>
                  </Form.Control>
                </Form.Group>
                {/* Render the panel with selected color and layout */}
                {renderPanelWithLayout(layouts.panel2)}
              </div>
            </div>
          )}
          {panelSize === 'T' && (
            <div className="d-flex">
              <div className="me-3">
                <Form.Group controlId="layoutSelectionPanel1">
                  <Form.Label>Select Layout for Panel 1</Form.Label>
                  <Form.Control as="select" value={layouts.panel1} onChange={(e) => handleLayoutSelection('panel1', e.target.value)}>
                    <option value="">Select Layout</option>
                    <option value="layout1.0">Layout 1.0</option>
                    <option value="layout2.0">Layout 2.0</option>
                    <option value="layout3.0">Layout 3.0</option>
                    <option value="layout4.0">Layout 4.0</option>
                    <option value="layout6.0">Layout 6.0</option>
                    <option value="layout7.0">Layout 7.0</option>
                    <option value="layout8.0">Layout 8.0</option>
                    <option value="layout8.1">Layout 8.1</option>
                    <option value="layout10">Layout 10</option>
                  </Form.Control>
                </Form.Group>
                {/* Render the panel with selected color and layout */}
                {renderPanelWithLayout(layouts.panel1)}
              </div>
              <div className="me-3">
                <Form.Group controlId="layoutSelectionPanel2">
                  <Form.Label>Select Layout for Panel 2</Form.Label>
                  <Form.Control as="select" value={layouts.panel2} onChange={(e) => handleLayoutSelection('panel2', e.target.value)}>
                    <option value="">Select Layout</option>
                    <option value="layout1.0">Layout 1.0</option>
                    <option value="layout2.0">Layout 2.0</option>
                    <option value="layout3.0">Layout 3.0</option>
                    <option value="layout4.0">Layout 4.0</option>
                    <option value="layout6.0">Layout 6.0</option>
                    <option value="layout7.0">Layout 7.0</option>
                    <option value="layout8.0">Layout 8.0</option>
                    <option value="layout8.1">Layout 8.1</option>
                    <option value="layout10">Layout 10</option>
                  </Form.Control>
                </Form.Group>
                {/* Render the panel with selected color and layout */}
                {renderPanelWithLayout(layouts.panel2)}
              </div>
              <div>
                <Form.Group controlId="layoutSelectionPanel3">
                  <Form.Label>Select Layout for Panel 3</Form.Label>
                  <Form.Control as="select" value={layouts.panel3} onChange={(e) => handleLayoutSelection('panel3', e.target.value)}>
                    <option value="">Select Layout</option>
                    <option value="layout1.0">Layout 1.0</option>
                    <option value="layout2.0">Layout 2.0</option>
                    <option value="layout3.0">Layout 3.0</option>
                    <option value="layout4.0">Layout 4.0</option>
                    <option value="layout6.0">Layout 6.0</option>
                    <option value="layout7.0">Layout 7.0</option>
                    <option value="layout8.0">Layout 8.0</option>
                    <option value="layout8.1">Layout 8.1</option>
                    <option value="layout10">Layout 10</option>
                  </Form.Control>
                </Form.Group>
                {/* Render the panel with selected color and layout */}
                {renderPanelWithLayout(layouts.panel3)}
              </div>
            </div>
          )}
        </Tab>

        {/* Button Content Tab (Next Tab) */}
        <Tab eventKey="buttonContent" title="Button Content" disabled={!layouts.panel1 || (panelSize === 'M' && !layouts.panel2) || (panelSize === 'T' && !layouts.panel3)}>
          <h3>Button Content</h3>
          <p>Add content (icons or text) to your panel buttons.</p>
          {/* This section can be further expanded for drag-and-drop functionality */}
        </Tab>
      </Tabs>
    </Container>
  );
}

export default App;
