import { FC } from 'react';
import { Grid } from '@nextui-org/react';
import { FavoriteCardPokemon } from './FavoriteCardPokemon';

interface Props {
    pokemons: number[];
}

const FavoritePokemons: FC<Props> = ({ pokemons }) => {
    return (
        <Grid.Container gap={6} direction="row" justify="flex-start">
            {pokemons.map((id) => (
                <FavoriteCardPokemon pokemonId={id} />
            ))}
        </Grid.Container>
    );
};

export default FavoritePokemons;
