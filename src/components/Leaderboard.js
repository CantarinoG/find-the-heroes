import "../styles/Leaderboard.css";

import { miliToMinSec } from "../utils/converter";

function Leaderboard({ dataList }) {

    return <div className="leaderboard">
            <h1>LEADERBOARD</h1>
            <table>
                <thead>
                    <tr>
                        <th>RANKING</th>
                        <th>NAME</th>
                        <th>TIME</th>
                    </tr>
                </thead>
                <tbody>

                {dataList.map((data, index) => {
                    return <tr key={index}>
                        <td>{index + 1}°</td>
                        <td>{data.name}</td>
                        <td>{miliToMinSec(data.time)}</td>
                    </tr>
                })}
                </tbody>
            </table>
        </div>

}

export default Leaderboard;