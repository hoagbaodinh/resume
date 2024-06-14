import { useState } from 'react';
import './Video10.css';

interface IUser {
  name: string;
  age: number;
  city: string;
}
interface IProps {
  defaultName?: string;
  defaultAge?: number;
}

const Video10 = (props: IProps) => {
  const { defaultName = 'Jason', defaultAge = 22 } = props;
  const [name, setName] = useState<string>(defaultName);
  const [age, setAge] = useState<number>(defaultAge);
  const [city, setCity] = useState<string[]>([
    'Hà Nội',
    'Đà Nẵng',
    'Hồ Chí Minh',
  ]);
  const [selectedCity, setSelectedCity] = useState<string>('Hà Nội');

  const [users, setUsers] = useState<IUser[]>([
    { name: 'Eric', age: 25, city: 'Hà Nội' },
    { name: 'Eric1', age: 26, city: 'Đà Nẵng' },
    { name: 'Eric2', age: 27, city: 'Hồ Chí Minh' },
  ]);

  const [isShowBtn, setIsShowBtn] = useState<boolean>(false);

  const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const newUser: IUser = { name, age, city: selectedCity };
    setUsers((prev) => [...prev, newUser]);
    setName(defaultName);
    setAge(defaultAge);
    setSelectedCity('Hà Nội');
  };
  return (
    <>
      <div>Example video 10: hello world </div>
      <form className="form-user">
        <div>
          <label>Name:</label>
          <br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
        </div>
        <div>
          <label>Age:</label>
          <br />
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.valueAsNumber)}
          />
          <br />
        </div>
        <div>
          <label>City:</label>
          <br />
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            {city.map((c) => (
              <option value={c} key={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <input type="submit" value="Submit" onClick={handleSubmit} />
      </form>
      <hr />
      <div>List Users:</div>
      <div className="table-user">
        <table style={{ width: '100%' }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.name}>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Video10;
