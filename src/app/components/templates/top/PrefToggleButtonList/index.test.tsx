import { PrefToggleButtonList } from '.'
import { getPrefectures } from '@/services/prefectures/__mock__/fixture'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { usePathname, useRouter } from 'next/navigation'

const user = userEvent.setup()
jest.mock('next/navigation')

/* @ts-ignore */
usePathname.mockReturnValue('http://localhost:3000/')

function setup() {
  const replaceMock = jest.fn()

  /* @ts-ignore */
  useRouter.mockReturnValue({
    replace: replaceMock,
  })
  render(<PrefToggleButtonList prefDataList={getPrefectures.result} />)
  const pref1Button = screen.getByRole('button', { name: '北海道' })
  const pref2Button = screen.getByRole('button', { name: '青森県' })
  const clickButton = (Button: HTMLElement) => user.click(Button)
  return { replaceMock, pref1Button, pref2Button, clickButton }
}

describe('PrefToggleButtonList', () => {
  test('何も要素がクリックされていないとき，クエリパラメータは変化しない', () => {
    const { replaceMock } = setup()
    expect(replaceMock).not.toHaveBeenCalled()
  })

  test("'北海道'がクリックされたとき，クエリパラメータに'pref=1'が追加される", async () => {
    const { replaceMock, pref1Button, clickButton } = setup()
    await clickButton(pref1Button)
    expect(replaceMock).toHaveBeenCalledWith('http://localhost:3000/?pref=1')
  })

  test("'青森県'がクリックされたとき，クエリパラメータに'pref=2'が追加される", async () => {
    const { replaceMock, pref2Button, clickButton } = setup()
    await clickButton(pref2Button)
    expect(replaceMock).toHaveBeenCalledWith('http://localhost:3000/?pref=2')
  })

  test("'北海道'・'青森県'がクリックされたとき，クエリパラメータに'pref=1,2'が追加される", async () => {
    const { replaceMock, pref1Button, pref2Button, clickButton } = setup()
    await clickButton(pref1Button)
    expect(replaceMock).toHaveBeenCalledWith('http://localhost:3000/?pref=1')
    await clickButton(pref2Button)
    expect(replaceMock).toHaveBeenCalledWith(
      'http://localhost:3000/?pref=1%2C2'
    )
  })

  test("'北海道'が2回クリックされたとき，クエリパラメータに'pref=1'が追加されたあとに削除される", async () => {
    const { replaceMock, pref1Button, clickButton } = setup()
    await clickButton(pref1Button)
    expect(replaceMock).toHaveBeenCalledWith('http://localhost:3000/?pref=1')
    await clickButton(pref1Button)
    expect(replaceMock).toHaveBeenCalledWith('http://localhost:3000/?')
  })

  test("'北海道'→'青森県'→'北海道'の順でクリックされたとき，クエリパラメータは'pref=2'になっている", async () => {
    const { replaceMock, pref1Button, pref2Button, clickButton } = setup()
    await clickButton(pref1Button)
    expect(replaceMock).toHaveBeenCalledWith('http://localhost:3000/?pref=1')
    await clickButton(pref2Button)
    expect(replaceMock).toHaveBeenCalledWith(
      'http://localhost:3000/?pref=1%2C2'
    )
    await clickButton(pref1Button)
    expect(replaceMock).toHaveBeenCalledWith('http://localhost:3000/?pref=2')
  })
})
