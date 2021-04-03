import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import logo from 'Assets/header/header_small-logo.png';

const WelcomePage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 25px;

  h3 {
    font-size: 1.5rem;
    font-weight: 400;
    max-width: Min(40%, 500px);
    text-align: center;
    margin-bottom: 5rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 800px;
  margin-bottom: 2rem;
`;

const Item = styled.a`
  display: flex;
  box-sizing: border-box;
  margin-right: 15px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: calc(50% - 15px);
  padding: 25px 20px;
  font-size: 1.1rem;
  color: #333;
  cursor: pointer;
  transition: 100ms ease-in-out;

  &:hover {
    background-color: #eee;
  }
`;

const GitHubItem = styled(Item)`
  background-color: #56a5c7;
  color: white;

  &:hover {
    filter: brightness(1.1);
    background-color: #56a5c7;
  }
`;

storiesOf('Welcome', module).add('Главная', () => (
  <WelcomePage>
    <img src={logo}></img>
    <h3>Фронтенд для ERP/CRM-системы управления малого предприятия</h3>
    <Wrapper>
      <Item href="/?path=/story/form-checkbox--default">Форма</Item>
      <Item href="/?path=/story/table-table--default">Таблица</Item>
      <Item href="/?path=/story/button--default">Остальное</Item>
    </Wrapper>
    <Wrapper>
      <GitHubItem href="https://github.com/ilyasudakov/osfix_erp_frontend">
        GitHub
      </GitHubItem>
      <GitHubItem href="https://trello.com/b/xizh01bI/%D1%84%D1%80%D0%BE%D0%BD%D1%82%D0%B5%D0%BD%D0%B4">
        Trello
      </GitHubItem>
    </Wrapper>
  </WelcomePage>
));
