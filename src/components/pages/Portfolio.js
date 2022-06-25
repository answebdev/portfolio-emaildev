import { Helmet } from 'react-helmet';
import { Container, Row, Col, Card } from 'react-bootstrap';
import classes from '../../styles/Portfolio.module.css';

const Portfolio = () => {
  return (
    <div>
      <Helmet>
        <title>Adolf Schmuck | Portfolio</title>
      </Helmet>
      <div className={classes.Container}>
        <Row>
          <Col md={12}>
            <h2 className={classes.LeadTitle}>
              <strong>Portfolio</strong>
            </h2>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <p className={classes.MainText}>Samples of my work</p>
          </Col>
        </Row>

        <br />

        <Row>
          <Col md={12}>
            <div className={classes.CardContainer}>
              <div className={classes.CardDiv}>
                <Card className={classes.CardWidth}>
                  <Card.Img
                    variant='top'
                    src='https://images.pexels.com/photos/1114376/pexels-photo-1114376.jpeg?auto=compress&cs=tinysrgb&w=600'
                  />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <button
                      className={`${classes.Button} ${classes.LaunchBtn}`}
                      variant='dark'
                    >
                      Launch Project
                    </button>
                    <button className={classes.Button} variant='dark'>
                      See Code
                    </button>
                  </Card.Body>
                </Card>
              </div>

              <div className={classes.CardDiv}>
                <Card className={classes.CardWidth}>
                  <Card.Img
                    variant='top'
                    src='https://images.pexels.com/photos/1086711/pexels-photo-1086711.jpeg?auto=compress&cs=tinysrgb&w=600'
                  />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <button
                      className={`${classes.Button} ${classes.LaunchBtn}`}
                      variant='dark'
                    >
                      Launch Project
                    </button>
                    <button className={classes.Button} variant='dark'>
                      See Code
                    </button>
                  </Card.Body>
                </Card>
              </div>

              <div className={classes.CardDiv}>
                <Card className={classes.CardWidth}>
                  <Card.Img
                    variant='top'
                    src='https://images.pexels.com/photos/1031700/pexels-photo-1031700.jpeg?auto=compress&cs=tinysrgb&w=600'
                  />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <button
                      className={`${classes.Button} ${classes.LaunchBtn}`}
                      variant='dark'
                    >
                      Launch Project
                    </button>
                    <button className={classes.Button} variant='dark'>
                      See Code
                    </button>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <div className={classes.CardContainer}>
              <div className={classes.CardDiv}>
                <Card className={classes.CardWidth}>
                  <Card.Img
                    variant='top'
                    src='https://images.pexels.com/photos/1051747/pexels-photo-1051747.jpeg?auto=compress&cs=tinysrgb&w=600'
                  />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <button
                      className={`${classes.Button} ${classes.LaunchBtn}`}
                      variant='dark'
                    >
                      Launch Project
                    </button>
                    <button className={classes.Button} variant='dark'>
                      See Code
                    </button>
                  </Card.Body>
                </Card>
              </div>

              <div className={classes.CardDiv}>
                <Card className={classes.CardWidth}>
                  <Card.Img
                    variant='top'
                    src='https://images.pexels.com/photos/2529787/pexels-photo-2529787.jpeg?auto=compress&cs=tinysrgb&w=600'
                  />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <button
                      className={`${classes.Button} ${classes.LaunchBtn}`}
                      variant='dark'
                    >
                      Launch Project
                    </button>
                    <button className={classes.Button} variant='dark'>
                      See Code
                    </button>
                  </Card.Body>
                </Card>
              </div>

              <div className={classes.CardDiv}>
                <Card className={classes.CardWidth}>
                  <Card.Img
                    variant='top'
                    src='https://images.pexels.com/photos/210126/pexels-photo-210126.jpeg?auto=compress&cs=tinysrgb&w=600'
                  />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <button
                      className={`${classes.Button} ${classes.LaunchBtn}`}
                      variant='dark'
                    >
                      Launch Project
                    </button>
                    <button className={classes.Button} variant='dark'>
                      See Code
                    </button>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Portfolio;
