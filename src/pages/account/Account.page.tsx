// Chakra Imports
import { Box, Container, Tabs } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "../../components/ui/tooltip";

// React Router Imports
import { NavLink as ReactRouterNavLink } from "react-router-dom";

// Custom User Imports
import NavBar from "../../components/navbar/Navbar.component";
import AccountIntro from "../../components/account/overview/AccountOverview.component";
import AccountUpdate from "../../components/account/update/AccountUpdate.component";
import AccountEmail from "../../components/account/email/AccountEmail.component";
import PasswordUpdate from "../../components/account/password/AccountPassword.component";
import AccountDelete from "../../components/account/delete/AccountDelete.component";
import AccountMFA from "./../../components/account/mfa/AccountMFA.component";

// React Icons Imports
import { CgDanger } from "react-icons/cg";
import { FaEnvelope } from "react-icons/fa";
import { TbPasswordUser, TbShieldLock } from "react-icons/tb";
import { RiEditBoxFill, RiProfileLine } from "react-icons/ri";

// Stylesheet Imports
import "./account.page.scss";
import { useEffect } from "react";

// Root Component (Account)
const Account = () => {
	const navigate = useNavigate();
	useEffect(() => {
		navigate("overview");
	}, []);
	const tabs = [
		{
			id: 1,
			title: "Overview",
			value: "overview",
			url: "overview",
			icon: <RiProfileLine size={20} />,
		},
		{
			id: 2,
			title: "Manage Profile",
			value: "profile",
			url: "profile",
			icon: <RiEditBoxFill size={20} />,
		},
		{
			id: 3,
			title: "Update Email",
			value: "email",
			url: "email",
			icon: <FaEnvelope size={20} />,
		},
		{
			id: 4,
			title: "Password",
			value: "password",
			url: "password",
			icon: <TbPasswordUser size={24} />,
		},
		{
			id: 5,
			title: "Security",
			value: "mfa",
			url: "mfa",
			icon: <TbShieldLock size={20} />,
		},
		{
			id: 6,
			title: "Danger Zone",
			value: "danger",
			url: "danger",
			icon: <CgDanger size={20} />,
		},
	];
	const tabContents = [
		{ id: 1, value: "overview", component: <AccountIntro /> },
		{ id: 2, value: "profile", component: <AccountUpdate /> },
		{ id: 3, value: "email", component: <AccountEmail /> },
		{ id: 4, value: "password", component: <PasswordUpdate /> },
		{ id: 5, value: "mfa", component: <AccountMFA /> },
		{ id: 6, value: "danger", component: <AccountDelete /> },
	];
	return (
		<div>
			<NavBar />
			<Box className="account__page">
				<Tabs.Root
					defaultValue="overview"
					variant="plain"
					lazyMount
					fitted
					navigate={({ value }) => navigate(value)}
					css={{
						"--tabs-indicator-bg": "colors.orange.subtle",
						"--tabs-indicator-shadow": "shadows.xs",
						"--tabs-trigger-radius": "radii.full",
					}}
				>
					<Tabs.List>
						{/* Tab Components For Account Page */}
						{tabs.map((tab) => {
							return (
								<Tabs.Trigger key={tab.id} value={tab.value} asChild>
									<ReactRouterNavLink to={`/account/user/${tab.url}`}>
										<Tooltip content={tab.title} showArrow>
											<Box
												css={{
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
												}}
											>
												{tab.icon}
												<p className="account__page--tab--item--title">
													{tab.title}
												</p>
											</Box>
										</Tooltip>
									</ReactRouterNavLink>
								</Tabs.Trigger>
							);
						})}
						<Tabs.Indicator />
					</Tabs.List>

					{/* Tab Contents For Account Page */}
					{tabContents.map((tab) => {
						return (
							<Tabs.Content key={tab.id} value={tab.value}>
								{tab.component}
							</Tabs.Content>
						);
					})}
				</Tabs.Root>
			</Box>
		</div>
	);
};

export default Account;
