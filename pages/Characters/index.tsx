import { ReactElement } from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { GetResults } from '../../src/types/types';


const index = ({ characters }: any) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '40px',
        justifyContent: 'center',
        padding: '0 80px',
      }}
    >
      {characters?.map((char) => {
        return (
          <div key={char.id}>
            {/* FIX THE HREF SO IT CAN REDIRECT TO EVERY CHARACTER PAGE ------------------------- */}
            <Link href={} passHref>
              <Image
                src={char.image}
                alt={char.name}
                width={200}
                height={200}
              ></Image>
            </Link>
            <Typography variant="h6">{char.name}</Typography>
          </div>
        );
      })}
    </Box>
  );
};

index.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

/* FIX THE FETCH OPERATION TO GET ALL THE CHARACTERS ---------------------------------- */

export function getStaticProps() {
  const res = `https://rickandmortyapi.com`;
  const { results }: GetResults = res;

  return {
    props: {
      characters: null,
    },
  };
}

export default index;
