import { Typography } from '@mui/material';
import { Characters, GetResults } from '../../src/types/types';
import CharacterCard from '../../components/CharacterCard';
import { Box } from '@mui/system';
import { GetStaticPaths } from 'next';
import { ReactElement } from 'react';
import Layout from '../../components/Layout';

/* IMPLEMENT TYPING  AND SEND CORRECT INFO TO <CharacterCard />  */
const characterInfo = ({ character }) => {
  return (
    <Box sx ={{display:'flex', flexDirection:'column', alignItems:'center'}}>
      <Typography variant="h1">{character.name} </Typography>
      {/* <CharacterCard /> */}
      
    </Box>
  );
};

characterInfo.getLayout = function getLayout(page:ReactElement) {
    return(
      <Layout>
        {page}
      </Layout>
    )
  }

export const getStaticPaths:GetStaticPaths = async ()=> {
  const res = await fetch('https://rickandmortyapi.com/api/character');
  const { results }: GetResults = await res.json();

  const paths = results.map((char) => ({ params: { id: String(char.id) } }));

  return {
    paths,
    fallback: false,
  };
}

/* USE THIS TYPE IN getStaticProps */
export interface Params {
  params: { id: string };
}

/* IMPLEMENT  getStaticProps TO FETCH THE INFO OF THE CHARACTER */
export function getStaticProps ({ params }) {
 
  return { props: { character: result } };
}

export default characterInfo;
