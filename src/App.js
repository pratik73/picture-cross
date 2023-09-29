import "./App.css";
import PictureCrossGrid from "./components/PictureCrossGrid";
import {
  calculateHints,
  generateCrossMatrix,
  generateMatrixWithValues,
} from "./utils";

function App() {
  const randomMatrix = generateMatrixWithValues(12, 12);
  const { top, left } = calculateHints(randomMatrix);

  const matrix = generateCrossMatrix(12, 12);
  return (
    <div className='App'>
      <header className='App-header'>
        <table>
          <tbody>
            <tr>
              <td colSpan='4'></td>
              <td colSpan='12'>
                <PictureCrossGrid values={top} readonly={true} />
              </td>
            </tr>
            <tr />
            <tr>
              <td colSpan='4'>
                <PictureCrossGrid values={left} readonly={true} />
              </td>
              <td>
                <PictureCrossGrid values={matrix} />{" "}
              </td>
            </tr>
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
