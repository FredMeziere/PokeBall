import {
  arrayOf, shape,
} from 'prop-types';
import Card from './Card';
import './styles.scss';

function Cards({ datas }) {
  return (
    <div className="cards">
      {
        datas.map((data) => (
          <Card key={data.id} {...data} />
        ))
      }
    </div>
  );
}

export default Cards;

Cards.propTypes = {
  datas: arrayOf(shape()).isRequired,
};
