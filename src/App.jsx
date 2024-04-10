import { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');
  const [isSelected, setIsSelected] = useState(true);

  return (
    <main className="section container">
      {!isSelected && (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )}

      {isSelected && (
        <h1 className="title is-flex is-align-items-center">
          {selectedGood} is selected
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => {
              setIsSelected(false);
              setSelectedGood('');
            }}
          />
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              key={good}
              data-cy="Good"
              className={
                selectedGood === good ? 'has-background-success-light' : ''
              }
            >
              <td>
                <button
                  data-cy={selectedGood === good ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={`button ${selectedGood === good ? 'is-info' : ''}`}
                  onClick={() => {
                    if (selectedGood === good) {
                      setSelectedGood(null);
                      setIsSelected(false);
                    } else {
                      setSelectedGood(good);
                      setIsSelected(true);
                    }
                  }}
                >
                  {selectedGood === good ? '-' : '+'}
                </button>
              </td>
              <td data-cy="GoodTitle" className="is-vcentered">
                {good}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
