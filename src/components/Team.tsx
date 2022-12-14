import Image from '~/components/Image';

type Props = {
  data: {
    [key: string]: any;
  };
  showWin: boolean;
};

function Team({ data, showWin }: Props) {
  return (
    <div className="flex mt-1">
      <div className="">
        <Image src={data.image} alt="" className="w-6" />
      </div>
      <p className="mt-1 ml-2 w-11/12">{data.name}</p>
      {showWin && <div className="ret text-sm text-red-600">{data.win}</div>}
    </div>
  );
}

export default Team;
