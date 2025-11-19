import { getCollection } from "@/firebase/services/firestoreServices";

type HomeDataType = {
  id: string;
  name: string;
  email: string;
};

const Home = async () => {
  const result = await getCollection();
  console.log("Data:", result);

  return (
    <>
      <h1 className="mx-0 px-0 text-3xl font-bold underline">Hello world!</h1>
      <h3>My name is {result[0].name}</h3>
    </>
  );
};

export default Home;
