type HomeProps = {
  name: string;
  age: number[];
  fun: (n1: number, n2: number) => number;
};
export const Home = ({ name, age, fun }: HomeProps) => {
  return (
    <h1>
      Hi {name}, you are {age} years old, the answer is {fun(age[0], age[1])}
    </h1>
  );
};

export default Home;

  