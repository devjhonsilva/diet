import {Container} from './style';

import { Header } from '@components/Header';
import { Statistic } from '@components/Statistic';
import { Button } from '@components/Button';

export default function Home() {
    return (
        <Container>
            <Header />
            <Statistic />

            <Button title='Nova refeição' />

        </Container>
    );

}
