/* eslint-disable jest/no-conditional-expect */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import '@testing-library/jest-dom'
import { fireEvent } from '@testing-library/react';
import { PagesLinks } from "./pagesLinks"
import { renderTestComponent } from "utils/renderTestComponent"


describe('checks the PAGES LINKS component', () => {

  test('dropdown opening correctly on small screens', () => {
    const { container } = renderTestComponent(<PagesLinks />)

    global.innerWidth = 500;
    global.dispatchEvent(new Event('resize'));

    const menuIcon = container.getElementsByClassName("pages__menu")[0]
    const linksList = container.getElementsByClassName("pages__links")[0]

    expect(menuIcon).toBeInTheDocument()
    expect(linksList).toBeInTheDocument()
    
    // expect(linksList).toHaveStyle('display: none');

    // fireEvent.click(menuIcon)
    // expect(linksList).toBeInTheDocument()

  })

})

export {}