export const App = () => {

  const name = "Daniil";
  const google = [
    "Google: ",
    "https://www.google.com/",
  ];
  const num1 = 6*7;
  const num2 = 45+23;
  const colors = [
    "Червоний",
    "Синій",
    "Зелений"
  ]
  const colorMap = colors.map(color => {
    return <li>{color}</li>
  });


  return (
    <div>
      <h1>{name}</h1>
      <p>Ласкаво просимо до нашого сайту!</p>
      <a href="#1">{google}</a>
      <p>{num1}<br/>{num2}</p>
      <ul>
        {colorMap}
      </ul>
      <img src="https://static-00.iconduck.com/assets.00/react-icon-2048x2048-o8k3ymqa.png"  alt="react" />
    </div>
  );
};
