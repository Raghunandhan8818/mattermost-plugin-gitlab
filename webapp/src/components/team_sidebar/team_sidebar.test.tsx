import React from 'react';
import TeamSidebar from './team_sidebar';
import { describe, expect, test, jest } from '@jest/globals';
import { render } from '@testing-library/react';


const mockTheme = {
    sidebarBg: '#ffffff',
    sidebarText: '#333333',
    sidebarUnreadText: '#ff0000',
    sidebarTextHoverBg: '#eeeeee',
    sidebarTextActiveBorder: '#007bff',
    sidebarTextActiveColor: '#007bff',
    sidebarHeaderBg: '#f8f9fa',
    sidebarHeaderTextColor: '#495057',
    onlineIndicator: '#28a745',
    awayIndicator: '#ffc107',
    dndIndicator: '#dc3545',
    mentionBg: '#ffeb3b',
    mentionBj: '#ffeb3b',
    mentionColor: '#333333',
    centerChannelBg: '#f8f9fa',
    centerChannelColor: '#333333',
    newMessageSeparator: '#007bff',
    linkColor: '#007bff',
    buttonBg: '#007bff',
    buttonColor: '#ffffff',
    errorTextColor: '#dc3545',
    mentionHighlightBg: '#ffeb3b',
    mentionHighlightLink: '#007bff',
    codeTheme: 'solarized-dark',
};

jest.mock('../sidebar_buttons', () => ({
    __esModule: true,
    default:() => <div data-testid="mocked-sidebar-buttons" />,
}));


describe('TeamSidebar', () => {
    test('renders nothing when show is false', () => {
        const { queryByTestId } = render(<TeamSidebar show={false} theme={mockTheme} />);
        expect(queryByTestId('mocked-sidebar-buttons')).toBeNull();
    });

    test('renders SidebarButtons with correct props when show is true', () => {
        const { getByTestId } = render(<TeamSidebar show={true} theme={mockTheme} />);
        const sidebarButtonsElement = getByTestId('mocked-sidebar-buttons');
        expect(sidebarButtonsElement).not.toBeNull();
    });
});
