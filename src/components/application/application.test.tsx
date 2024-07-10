import { render, screen } from "@testing-library/react"
import { Application } from "./application"
import React from 'react';

describe('Application', () => {
    it('renders correctly', () => {
        render(<Application />);

        const pageHeading = screen.getByRole('heading', { level: 1 });
        expect(pageHeading).toBeInTheDocument();

        const sectionHeading = screen.getByRole('heading', { level: 2 });
        expect(sectionHeading).toBeInTheDocument();

        const mandatoryElement = screen.getByText('All fields are mandatory');
        expect(mandatoryElement).toBeInTheDocument();

        const closeElement = screen.getByTitle('close');
        expect(closeElement).toBeInTheDocument();

        const customElement = screen.getByTestId('custom-element');
        expect(customElement).toBeInTheDocument();

        const nameElement =  screen.getByRole('textbox', {
            name: 'Name'
        });
        expect(nameElement).toBeInTheDocument();

        const nameElement2 = screen.getByDisplayValue('Jonty Sachdeva');
        expect(nameElement2).toBeInTheDocument();

        const bioElement = screen.getByRole('textbox', {
            name: 'Bio'
        });
        expect(bioElement).toBeInTheDocument()

        const jobLocationElement = screen.getByRole('combobox');
        expect(jobLocationElement).toBeInTheDocument();

        const termsElement = screen.getByRole('checkbox');
        expect(termsElement).toBeInTheDocument();

        const submitButtonElement = screen.getByRole('button');
        expect(submitButtonElement).toBeInTheDocument();
    })
})