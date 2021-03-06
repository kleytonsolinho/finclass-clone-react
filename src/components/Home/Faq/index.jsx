import { useState } from 'react';

import faqImg from '../../../assets/images/site/faq.svg';
import geralIcon from '../../../assets/images/site/general.svg';

import { geral, aplicativo, assinatura } from '../../../data/dataFaq';

import {
  Container,
  Title,
  Navigation,
  Button,
  ContentQuestion,
  Question,
} from './styles';

export default function Faq() {
  const [buttonSelect, setButtonSelect] = useState(1);
  const [faqSelect, setFaqSelect] = useState(0);

  function tooggleButton(n) {
    setButtonSelect(n);
    setFaqSelect(0);
  }

  function tooggleFaq(n) {
    if (faqSelect === n) {
      setFaqSelect(0);
      return;
    }
    setFaqSelect(n);
  }

  return (
    <Container>
      <img src={faqImg} alt="" />
      <Title>
        <strong>Perguntas </strong>
        frequentes
      </Title>
      <Navigation>
        <Button
          type="button"
          onClick={() => tooggleButton(1)}
          className={buttonSelect === 1 ? 'active' : null}
        >
          <img src={geralIcon} alt="geral" />
          Geral
        </Button>
        <Button
          type="button"
          className={buttonSelect === 2 ? 'active' : null}
          onClick={() => tooggleButton(2)}
        >
          <img src={geralIcon} alt="aplicativos" />
          Aplicativo
        </Button>
        <Button
          type="button"
          className={buttonSelect === 3 ? 'active' : null}
          onClick={() => tooggleButton(3)}
        >
          <img src={geralIcon} alt="planos & assinaturas" />
          Planos & Assinaturas
        </Button>
      </Navigation>
      <ContentQuestion
        className={buttonSelect === 1 ? 'active-faq' : null}
      >
        {geral.map((item) => (
          <Question
            onClick={() => tooggleFaq(item.id)}
            className={faqSelect === item.id ? 'open' : null}
          >
            <div className="question">
              <h4>{item.question}</h4>
              <div className={
                faqSelect === item.id ? 'arrow-up' : 'arrow-down'
              }
              />
            </div>
            <div
              className={
                faqSelect === item.id ? 'answer open' : 'answer'
            }
            >
              <p>
                {item.answer}
              </p>
            </div>
          </Question>
        ))}
      </ContentQuestion>
      <ContentQuestion
        className={buttonSelect === 2 ? 'active-faq' : null}
      >
        {aplicativo.map((item) => (
          <Question
            onClick={() => tooggleFaq(item.id)}
            className={faqSelect === item.id ? 'open' : null}
          >
            <div className="question">
              <h4>{item.question}</h4>
              <div className={
                faqSelect === item.id ? 'arrow-up' : 'arrow-down'
              }
              />
            </div>
            <div
              className={
                faqSelect === item.id ? 'answer open' : 'answer'
            }
            >
              <p>
                {item.answer}
              </p>
            </div>
          </Question>
        ))}
      </ContentQuestion>
      <ContentQuestion
        className={buttonSelect === 3 ? 'active-faq' : null}
      >
        {assinatura.map((item) => (
          <Question
            onClick={() => tooggleFaq(item.id)}
            className={faqSelect === item.id ? 'open' : null}
          >
            <div className="question">
              <h4>{item.question}</h4>
              <div className={
                faqSelect === item.id ? 'arrow-up' : 'arrow-down'
              }
              />
            </div>
            <div
              className={
                faqSelect === item.id ? 'answer open' : 'answer'
            }
            >
              <p>
                {item.answer}
              </p>
            </div>
          </Question>
        ))}
      </ContentQuestion>
    </Container>
  );
}
