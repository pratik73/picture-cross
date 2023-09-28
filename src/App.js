import "./App.css";
import PictureCrossGrid from "./components/PictureCrossGrid";
import { generateCrossMatrix, generateMatrix, rotateMatrix } from "./utils";

function App() {
  const top = rotateMatrix(generateMatrix(12, 4));
  const left = generateMatrix(12, 4);
  const matrix = generateCrossMatrix(12, 12);
  return (
    <div className='App'>
      <header className='App-header'>
        <table>
          <tbody>
            <tr>
              <td colSpan='4'></td>
              <td colSpan='12'>
                <PictureCrossGrid
                  rows={4}
                  columns={12}
                  values={top}
                  readonly={true}
                />
              </td>
            </tr>
            <tr />
            <tr>
              <td colSpan='4'>
                <PictureCrossGrid
                  rows={12}
                  columns={4}
                  values={left}
                  readonly={true}
                />
              </td>
              <td>
                <PictureCrossGrid rows={12} columns={12} values={matrix} />{" "}
              </td>
            </tr>
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
