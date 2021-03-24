import uuid from 'react-uuid';
import Row from './Row';

const List = ({ todos }) => {

  return (
    <>
      <table>
        {todos.length > 0 &&

          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
            </tr>
          </thead>
        }
        <tbody>

          {todos.map((item, i) => {

            return <Row key={uuid()} title={item.title} description={item.description} />
          }
          )}

        </tbody>
      </table>
    </>
  )
}
export default List;