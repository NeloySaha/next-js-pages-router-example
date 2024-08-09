import CabinView from "@/components/CabinView";
import { getCabin } from "@/lib/data-service";
import Head from "next/head";
import { useRouter } from "next/router";

// Dynamically generated page SSR
export async function getServerSideProps({ params }) {
  const cabin = await getCabin(params.cabinId);

  return { props: { cabin } };
}

function CabinId({ cabin }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Cabin #{router.query.cabinId} | The Wild Oasis</title>
      </Head>

      <div className="mx-auto max-w-6xl">
        <CabinView cabin={cabin} />
      </div>
    </>
  );
}

export default CabinId;
