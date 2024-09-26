"use client";
import { Flex, Heading, Button, Background, UserMenu } from '@/once-ui/components';
import Navbar from '@/app/components/Navbar';
import OpenLetter from '@/app/components/OpenLetter';
import ParticipationStats from '@/app/components/ParticipationStats';
import CallToAction from '@/app/components/CallToAction';
import Survey from '@/app/components/Survey';
import CommitmentList from '@/app/components/CommitmentList';
import Instructions from '@/app/components/Instructions';

export default function Home() {
	const openLetters = [
		{
			title: "Open Letter to Auto Finance Lenders",
			content: "Dear Valued Partners in Auto Finance, ...",
			author: "Industry Collaboration Initiative",
			cta: <Button href="#join" variant="secondary">Join Now</Button>
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
		try {
			console.log('Survey Responses:', responses);
			// Implement the submission logic here
		} catch (error) {
			console.error('Error submitting survey:', error);
		}
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
						userMenu={<UserMenu />} // Add this line
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
								cta={letter.cta}
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
				<footer>
					<ul>
						<li><a href="#privacy">Privacy Policy</a></li>
						<li><a href="#terms">Terms of Service</a></li>
					</ul>
					<p>© 2024 Industry Collaboration Initiative. All rights reserved.</p>
				</footer>
			</Flex>
	);
}
