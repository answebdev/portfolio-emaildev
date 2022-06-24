import { Helmet } from 'react-helmet';
import { Row, Col } from 'react-bootstrap';
import classes from '../../styles/Photos.module.css';

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
            <p className={classes.MainText}>
              Bacon ipsum dolor amet beef ham hock corned beef, shank strip
              steak hamburger jowl alcatra picanha biltong doner ribeye
              capicola.
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Portfolio;
