import { Container } from '@/containers/hoc/Container/Container'

import { VisitedProjects } from '@/containers/VisitedProjects/VisitedProjects'
import { Additional } from '../Project/Additional/Additional'

export const AdditionalOptions = () => {
  return (
    <section>
      <Container>
        <Additional />
        <VisitedProjects />
      </Container>
    </section>
  );
};
