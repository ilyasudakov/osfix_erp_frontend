import React from 'react'
import TasksList from './TasksList.jsx'
import { render, cleanup, fireEvent, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { createMemoryHistory } from 'history'

const mockHistoryPush = jest.fn()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}))

const renderWithRouter = (component) => {
  const history = createMemoryHistory()
  return {
    ...render(<MemoryRouter history={history}>{component}</MemoryRouter>),
  }
}

describe('TasksList component', () => {
  afterEach(cleanup)

  it('matches snapshot', () => {
    const { asFragment } = render(<TasksList />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders w/o props', () => {
    render(<TasksList />)
  })

  it('renders tasks list', async () => {
    const tasks = [
      {
        id: 1,
        description: 'asd',
        condition: '',
        status: '',
        dateControl: new Date(),
        dateCreated: new Date(),
      },
      {
        id: 2,
        description: '123',
        condition: '',
        status: '',
        dateControl: new Date(),
        dateCreated: new Date(),
      },
    ]

    const controlDates = { [new Date()]: [...tasks] }

    // renderWithRouter(<TasksList controlDates={controlDates} tasks={tasks} />)
    // expect(await screen.findByText('asd')).toBeInTheDocument()
    // expect(await screen.findByText('123')).toBeInTheDocument()
  })

  it('renders expired task', () => {
    // render(<TasksList />)
  })
})