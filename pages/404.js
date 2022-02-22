import React from 'react';
// Third-party

const PagenotFound = () => {
  return (
    <>
      <Container fluid className="error_sec">
        <Container>
          <Row>
            <div className="error_info text-left">
              <h1>404!</h1>
              <h3>UH OH! You are lost.</h3>
            </div>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default PagenotFound;
