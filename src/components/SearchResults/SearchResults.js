import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import styles from './SearchResults.scss';
import Container from '../Container/Container';

class SearchResults extends React.Component {
  static propTypes = {
    cards: PropTypes.array,
  };

  render() {
    const {cards} = this.props;

    return (
      <Container>
        <section className={styles.component}>
          <div className={styles.cards}>
            {cards.length ? cards.map(cardData => (
              <Card key={cardData.id} {...cardData} />
            )) : 'no results message' }
          </div>
        </section>
      </Container>
    );
  }
}

export default SearchResults;