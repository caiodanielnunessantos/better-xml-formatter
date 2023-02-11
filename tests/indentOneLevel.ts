import assert from 'assert';
import { indentOneLevel } from '../src/string';

const input =
`Enciclopédia (em grego clássico: εγκυκλοπαιδεία; romaniz.: enkyklopaideía,
formado a partir de ἐγκυκλο "circular" + παιδεία "educação") é uma coletânea de
textos bastante numerosos, cujo objetivo principal é descrever o melhor possível
o estado atual do conhecimento humano. Pode-se definir como uma obra que trata
de todas as ciências e artes do conhecimento do homem atual.[1][2] Pode ser
tanto um livro de referência para praticamente qualquer assunto do domínio
humano como também uma obra na internet. As enciclopédias podem ser divididas em
dois grupos: genéricas, que coletam conhecimentos de todo o conhecimento humano
(como, por exemplo, a Encyclopædia Britannica), ou especializadas, com tópicos
relacionados a um assunto específico (como, por exemplo, uma enciclopédia de
medicina ou de matemática). O termo enciclopédia começou a ser utilizado em
meados do século XVI, embora trabalhos de formato similar já existissem em
épocas anteriores.`;
const expected_output = `   Enciclopédia (em grego clássico: εγκυκλοπαιδεία; romaniz.: enkyklopaideía,
   formado a partir de ἐγκυκλο "circular" + παιδεία "educação") é uma coletânea de
   textos bastante numerosos, cujo objetivo principal é descrever o melhor possível
   o estado atual do conhecimento humano. Pode-se definir como uma obra que trata
   de todas as ciências e artes do conhecimento do homem atual.[1][2] Pode ser
   tanto um livro de referência para praticamente qualquer assunto do domínio
   humano como também uma obra na internet. As enciclopédias podem ser divididas em
   dois grupos: genéricas, que coletam conhecimentos de todo o conhecimento humano
   (como, por exemplo, a Encyclopædia Britannica), ou especializadas, com tópicos
   relacionados a um assunto específico (como, por exemplo, uma enciclopédia de
   medicina ou de matemática). O termo enciclopédia começou a ser utilizado em
   meados do século XVI, embora trabalhos de formato similar já existissem em
   épocas anteriores.`;
const output = indentOneLevel(input, 3);
assert(expected_output === output);
