"use client";

import React from 'react';
import { Flex, Heading, Text, Button, Background } from '@/once-ui/components';
import Navbar from '@/components/Navbar';
import OpenLetter from '@/components/OpenLetter';
import ParticipationStats from '@/components/ParticipationStats';
import CallToAction from '@/components/CallToAction';
import Survey from '@/components/Survey';
import CommitmentList from '@/components/CommitmentList';
import Instructions from '@/components/Instructions';
import Footer from '@/components/Footer';

export default function Home() {
	const openLetters = [
		{
			title: "Open Letter to Auto Finance Lenders",
			content: "Dear Valued Partners in Auto Finance, ...",
			author: "Industry Collaboration Initiative",
			ct: <Button href="#join" variant="secondary">Join Now</Button>
		},
		// Add additional letters as needed
	];

	const participationStats = {
		totalParticipants: 120,
		commitments: [
			{ title: "Signed Up", count: 80 },
			{ title: "Completed Surveys", count: 50 },
			{ title: "Active Discussions", count: 30 },
		],
		detailsLink: "#stats"
	};

	const commitmentUsers = [
		{ name: "Jane Doe", organization: "FinanceCorp", avatarUrl: "/avatars/jane.jpg" },
		{ name: "John Smith", organization: "AutoLoan Inc.", avatarUrl: "/avatars/john.jpg" },
		// Add more users
	];

	const surveyQuestions = [
		{
			id: "q1",
			question: "How has DRN's control over LPR data affected your operations?",
			type: "text"
		},
		{
			id: "q2",
			question: "Which of the following challenges have you faced?",
			type: "checkbox",
			options: ["Operational Constraints", "Economic Impact", "Compliance Risks"]
		},
		// Add more questions
	];

	const instructionsSteps = [
		{ step: 1, description: "Share your experience by completing the survey." },
		{ step: 2, description: "Join the secure forum to discuss your challenges." },
		{ step: 3, description: "Collaborate with other stakeholders to drive change." },
	];

	const handleSurveySubmit = (responses: Record<string, any>) => {
		// Handle survey submission logic
		console.log('Survey Responses:', responses);
	};

	return (
		<Flex
			fillWidth paddingTop="l" paddingX="l"
			direction="column" alignItems="center" flex={1}>
				<Background dots={false}/>
				<Flex
					position="relative"
					as="section" overflow="hidden"
					fillWidth minHeight="0" maxWidth={68}
					direction="column" alignItems="center" flex={1}>
					
					<Navbar
						links={[
							{ href: "#home", label: "Home" },
							{ href: "#about", label: "About" },
							{ href: "#contact", label: "Contact" },
						]}
					/>

					<Flex
						as="main"
						direction="column" justifyContent="center"
						fillWidth fillHeight padding="l" gap="l">
						
						<Heading variant="display-strong-s" wrap="balance">
							Industry Collaboration Initiative
						</Heading>

						{openLetters.map((letter, index) => (
							<OpenLetter
								key={index}
								title={letter.title}
								content={letter.content}
								author={letter.author}
								ct={letter.ct}
							/>
						))}

						<ParticipationStats
							totalParticipants={participationStats.totalParticipants}
							commitments={participationStats.commitments}
							detailsLink={participationStats.detailsLink}
						/>

						<CommitmentList
							users={commitmentUsers}
							onViewDetails={() => console.log('View all commitments')}
						/>

						<CallToAction
							message="Join our initiative to foster a fair and competitive repossession industry."
							buttonText="Participate Now"
							onClick={() => console.log('Participate Now clicked')}
						/>

						<Survey
							questions={surveyQuestions}
							onSubmit={handleSurveySubmit}
						/>

						<Instructions
							title="How to Get Involved"
							steps={instructionsSteps}
						/>
					</Flex>
				</Flex>
				
				<Footer
					links={[
						{ href: "#privacy", label: "Privacy Policy" },
						{ href: "#terms", label: "Terms of Service" },
					]}
					text="© 2024 Industry Collaboration Initiative. All rights reserved."
				/>
			</Flex>
	);
}
