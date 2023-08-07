const page = ({
  params,
}: {
  params: {
    postId: string;
  };
}) => {
  return <div>{params.postId}</div>;
};
export default page;
