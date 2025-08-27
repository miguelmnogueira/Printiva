"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
	Check,
	Clock,
	AlertCircle,
	X,
	Calendar,
	User,
	MapPin,
	MessageSquare,
	Award,
	Briefcase,
	GraduationCap,
	Heart,
} from "lucide-react";

const timelineVariants = cva("relative flex flex-col", {
	variants: {
		variant: {
			default: "gap-4",
			compact: "gap-2",
			spacious: "gap-8",
		},
		orientation: {
			vertical: "flex-col",
			horizontal: "flex-row",
		},
	},
	defaultVariants: {
		variant: "default",
		orientation: "vertical",
	},
});

const timelineItemVariants = cva("relative flex gap-3 pb-2", {
	variants: {
		orientation: {
			vertical: "flex-row",
			horizontal: "flex-col min-w-64 shrink-0",
		},
	},
	defaultVariants: {
		orientation: "vertical",
	},
});

const timelineConnectorVariants = cva("bg-border", {
	variants: {
		orientation: {
			vertical: "absolute left-3 top-9 h-full w-px",
			horizontal: "absolute top-3 left-8 w-full h-px",
		},
		status: {
			default: "bg-border",
			completed: "bg-primary",
			active: "bg-primary",
			pending: "bg-muted-foreground/30",
			error: "bg-destructive",
		},
	},
	defaultVariants: {
		orientation: "vertical",
		status: "default",
	},
});

const timelineIconVariants = cva(
	"flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 bg-background text-xs font-medium",
	{
		variants: {
			status: {
				default: "border-border text-muted-foreground",
				completed: "border-primary bg-primary text-primary-foreground",
				active: "border-primary bg-background text-primary ",
				pending: "border-muted-foreground/30 text-muted-foreground",
				error: "border-destructive bg-destructive text-destructive-foreground",
			},
		},
		defaultVariants: {
			status: "default",
		},
	}
);

export interface TimelineItem {
	id: string;
	title: string;
	description?: string;
	timestamp?: string;
	status?: "default" | "completed" | "active" | "pending" | "error";
	icon?: React.ReactNode;
	content?: React.ReactNode;
	metadata?: Record<string, any>;
}

export interface TimelineProps extends VariantProps<typeof timelineVariants> {
	items: TimelineItem[];
	className?: string;
	showConnectors?: boolean;
	showTimestamps?: boolean;
	timestampPosition?: "top" | "bottom" | "inline";
}

function getStatusIcon(status: TimelineItem["status"]) {
	switch (status) {
		case "completed":
			return <Check className="h-3 w-3" />;
		case "active":
			return <Clock className="h-3 w-3" />;
		case "pending":
			return <Clock className="h-3 w-3" />;
		case "error":
			return <X className="h-3 w-3" />;
		default:
			return <div className="h-2 w-2 rounded-full bg-current" />;
	}
}

export function Timeline({
	items,
	className,
	variant,
	orientation = "vertical",
	showConnectors = true,
	showTimestamps = true,
	timestampPosition = "top",
	...props
}: TimelineProps) {
	const timelineContent = (
		<div
			className={cn(
				timelineVariants({ variant, orientation }),
				orientation === "horizontal" ? "pb-4" : ""
			)}
		>
			{items.map((item, index) => (
				<div
					key={item.id}
					className={cn(timelineItemVariants({ orientation }))}
				>
					{/* Connector Line */}
					{showConnectors && index < items.length - 1 && (
						<div
							className={cn(
								timelineConnectorVariants({
									orientation,
									status: item.status,
								})
							)}
						/>
					)}

					{/* Icon */}
					<div className="relative z-10 flex shrink-0">
						<div
							className={cn(
								timelineIconVariants({ status: item.status })
							)}
						>
							{item.icon || getStatusIcon(item.status)}
						</div>
					</div>

					{/* Content */}
					<div className="flex min-w-0 flex-1 flex-col gap-2">
						{/* Timestamp - Top */}
						{showTimestamps &&
							timestampPosition === "top" &&
							item.timestamp && (
								<time className="text-xs text-muted-foreground">
									{item.timestamp}
								</time>
							)}

						{/* Title and Inline Timestamp */}
						<div className="flex items-start justify-between gap-2">
							<h3 className="font-medium leading-tight">
								{item.title}
							</h3>
							{showTimestamps &&
								timestampPosition === "inline" &&
								item.timestamp && (
									<time className="shrink-0 text-xs text-muted-foreground">
										{item.timestamp}
									</time>
								)}
						</div>

						{/* Description */}
						{item.description && (
							<p className="text-sm text-muted-foreground leading-relaxed">
								{item.description}
							</p>
						)}

						{/* Custom Content */}
						{item.content && (
							<div className="mt-3">{item.content}</div>
						)}

						{/* Timestamp - Bottom */}
						{showTimestamps &&
							timestampPosition === "bottom" &&
							item.timestamp && (
								<time className="text-xs text-muted-foreground">
									{item.timestamp}
								</time>
							)}
					</div>
				</div>
			))}
		</div>
	);

	if (orientation === "horizontal") {
		return (
			<ScrollArea className={cn("w-full", className)} {...props}>
				{timelineContent}
			</ScrollArea>
		);
	}

	return (
		<div className={className} {...props}>
			{timelineContent}
		</div>
	);
}

// Example Components for Documentation
export function BasicTimelineExample() {
	const items: TimelineItem[] = [
		{
			id: "1",
			title: "Project Started",
			description: "Initial project setup and planning phase",
			timestamp: "",
			status: "completed",
		},
		{
			id: "2",
			title: "Development Phase",
			description: "Core features implementation in progress",
			timestamp: "",
			status: "active",
		},
		{
			id: "3",
			title: "Testing & QA",
			description: "Quality assurance and testing phase",
			timestamp: "",
			status: "pending",
		},
		{
			id: "4",
			title: "Launch",
			description: "Production deployment and launch",
			timestamp: "",
			status: "pending",
		},
	];

	return <Timeline items={items} />;
}

export function TimelineVariantsExample() {
	const items: TimelineItem[] = [
		{
			id: "1",
			title: "Task Completed",
			description: "Successfully finished the assigned task",
			status: "completed",
		},
		{
			id: "2",
			title: "In Progress",
			description: "Currently working on this item",
			status: "active",
		},
		{
			id: "3",
			title: "Upcoming",
			description: "Scheduled for later",
			status: "pending",
		},
	];

	return (
		<div className="space-y-8">
			<div>
				<h3 className="mb-4 text-sm font-medium">Default</h3>
				<Timeline items={items} variant="default" />
			</div>
			<div>
				<h3 className="mb-4 text-sm font-medium">Compact</h3>
				<Timeline items={items} variant="compact" />
			</div>
			<div>
				<h3 className="mb-4 text-sm font-medium">Spacious</h3>
				<Timeline items={items} variant="spacious" />
			</div>
		</div>
	);
}

export function HorizontalTimelineExample() {
	const items: TimelineItem[] = [
		{
			id: "1",
			title: "Planning",
			description: "Project planning and research",
			status: "completed",
		},
		{
			id: "2",
			title: "Design",
			description: "UI/UX design phase",
			status: "completed",
		},
		{
			id: "3",
			title: "Development",
			description: "Core development work",
			status: "active",
		},
		{
			id: "4",
			title: "Testing",
			description: "Quality assurance",
			status: "pending",
		},
		{
			id: "5",
			title: "Launch",
			description: "Production release",
			status: "pending",
		},
	];

	return <Timeline items={items} orientation="horizontal" />;
}

export function TimelineWithCustomIconsExample() {
	const items: TimelineItem[] = [
		{
			id: "1",
			title: "Account Created",
			description: "Welcome to our platform!",
			timestamp: "",
			status: "completed",
			icon: <User className="h-3 w-3" />,
		},
		{
			id: "2",
			title: "Profile Updated",
			description: "Personal information has been updated",
			timestamp: "",
			status: "completed",
			icon: <User className="h-3 w-3" />,
		},
		{
			id: "3",
			title: "First Order Placed",
			description: "Order #12345 has been placed successfully",
			timestamp: "",
			status: "completed",
			icon: <Briefcase className="h-3 w-3" />,
		},
		{
			id: "4",
			title: "Delivery Scheduled",
			description: "Your order is out for delivery",
			timestamp: "",
			status: "active",
			icon: <MapPin className="h-3 w-3" />,
		},
	];

	return <Timeline items={items} />;
}

export function TimelineWithContentExample() {
	const items: TimelineItem[] = [
		{
			id: "1",
			title: "Code Review Completed",
			description: "Pull request #123 has been reviewed",
			timestamp: "",
			status: "completed",
			content: (
				<div className="rounded-md bg-muted p-3 text-sm">
					<p className="font-medium">Changes approved by John Doe</p>
					<p className="text-muted-foreground">
						3 files changed, +45 -12 lines
					</p>
				</div>
			),
		},
		{
			id: "2",
			title: "Build Failed",
			description: "CI/CD pipeline encountered errors",
			timestamp: "",
			status: "error",
			content: (
				<div className="rounded-md bg-destructive/10 p-3 text-sm">
					<p className="font-medium text-destructive">
						Build #456 failed
					</p>
					<p className="text-muted-foreground">
						Syntax error in main.tsx:45
					</p>
				</div>
			),
		},
		{
			id: "3",
			title: "Issue Assigned",
			description: "Bug report assigned to development team",
			timestamp: "",
			status: "active",
			content: (
				<div className="rounded-md bg-primary/10 p-3 text-sm">
					<p className="font-medium">
						Issue #789: Login form validation
					</p>
					<p className="text-muted-foreground">
						Priority: High | Assigned to: Jane Smith
					</p>
				</div>
			),
		},
	];

	return <Timeline items={items} />;
}

export function ProjectTimelineExample() {
	const items: TimelineItem[] = [
		{
			id: "1",
			title: "Project Kickoff",
			description: "Initial meeting with stakeholders and team members",
			timestamp: "",
			status: "completed",
			icon: <Briefcase className="h-3 w-3" />,
			content: (
				<div className="space-y-2">
					<div className="flex gap-2 text-sm">
						<span className="font-medium">Attendees:</span>
						<span className="text-muted-foreground">
							5 team members
						</span>
					</div>
					<div className="flex gap-2 text-sm">
						<span className="font-medium">Duration:</span>
						<span className="text-muted-foreground">2 hours</span>
					</div>
				</div>
			),
		},
		{
			id: "2",
			title: "Requirements Gathering",
			description:
				"Detailed analysis of project requirements and specifications",
			timestamp: "",
			status: "completed",
			icon: <MessageSquare className="h-3 w-3" />,
		},
		{
			id: "3",
			title: "Design Phase",
			description: "UI/UX design and wireframe creation",
			timestamp: "",
			status: "active",
			icon: <Award className="h-3 w-3" />,
			content: (
				<div className="rounded-md border border-primary/20 bg-primary/5 p-3 text-sm">
					<p className="font-medium">Current Progress: 60%</p>
					<p className="text-muted-foreground">
						Expected completion: Feb 10, 2024
					</p>
				</div>
			),
		},
		{
			id: "4",
			title: "Development Sprint 1",
			description: "Core functionality implementation",
			timestamp: "",
			status: "pending",
			icon: <GraduationCap className="h-3 w-3" />,
		},
		{
			id: "5",
			title: "Testing & QA",
			description: "Quality assurance and bug fixes",
			timestamp: "",
			status: "pending",
			icon: <AlertCircle className="h-3 w-3" />,
		},
	];

	return <Timeline items={items} variant="spacious" />;
}

export function OrderTrackingTimelineExample() {
	const items: TimelineItem[] = [
		{
			id: "1",
			title: "Order Placed",
			description: "Your order has been successfully placed",
			timestamp: "",
			status: "completed",
			icon: <Check className="h-3 w-3" />,
		},
		{
			id: "2",
			title: "Payment Confirmed",
			description: "Payment has been processed successfully",
			timestamp: "",
			status: "completed",
			icon: <Check className="h-3 w-3" />,
		},
		{
			id: "3",
			title: "Order Processing",
			description: "Your order is being prepared for shipment",
			timestamp: "",
			status: "active",
			icon: <Clock className="h-3 w-3" />,
		},
		{
			id: "4",
			title: "Shipped",
			description: "Your order has been shipped",
			status: "pending",
			icon: <MapPin className="h-3 w-3" />,
		},
		{
			id: "5",
			title: "Delivered",
			description: "Package delivered to your address",
			status: "pending",
			icon: <Heart className="h-3 w-3" />,
		},
	];

	return <Timeline items={items} timestampPosition="inline" />;
}

export function CompactTimelineExample() {
	const items: TimelineItem[] = [
		{
			id: "1",
			title: "Login",
			timestamp: "",
			status: "completed",
		},
		{
			id: "2",
			title: "File uploaded",
			timestamp: "",
			status: "completed",
		},
		{
			id: "3",
			title: "Processing started",
			timestamp: "",
			status: "active",
		},
		{
			id: "4",
			title: "Processing complete",
			status: "pending",
		},
	];

	return (
		<Timeline
			items={items}
			variant="compact"
			timestampPosition="inline"
			showTimestamps={true}
		/>
	);
}

export function ExtendedHorizontalTimelineExample() {
	const items: TimelineItem[] = [
		{
			id: "1",
			title: "Research",
			description: "Market research and analysis",
			timestamp: "",
			status: "completed",
			icon: <MessageSquare className="h-3 w-3" />,
		},
		{
			id: "2",
			title: "Planning",
			description: "Project planning and roadmap",
			timestamp: "",
			status: "completed",
			icon: <Calendar className="h-3 w-3" />,
		},
		{
			id: "3",
			title: "Design",
			description: "UI/UX design and wireframes",
			timestamp: "",
			status: "completed",
			icon: <Award className="h-3 w-3" />,
		},
		{
			id: "4",
			title: "Prototype",
			description: "Interactive prototype development",
			timestamp: "",
			status: "completed",
			icon: <Briefcase className="h-3 w-3" />,
		},
		{
			id: "5",
			title: "Development",
			description: "Core feature implementation",
			timestamp: "",
			status: "active",
			icon: <GraduationCap className="h-3 w-3" />,
		},
		{
			id: "6",
			title: "Testing",
			description: "Quality assurance and testing",
			timestamp: "",
			status: "pending",
			icon: <AlertCircle className="h-3 w-3" />,
		},
		{
			id: "7",
			title: "Review",
			description: "Stakeholder review and feedback",
			timestamp: "",
			status: "pending",
			icon: <User className="h-3 w-3" />,
		},
		{
			id: "8",
			title: "Deploy",
			description: "Production deployment",
			timestamp: "",
			status: "pending",
			icon: <MapPin className="h-3 w-3" />,
		},
		{
			id: "9",
			title: "Launch",
			description: "Product launch and marketing",
			timestamp: "",
			status: "pending",
			icon: <Heart className="h-3 w-3" />,
		},
	];

	return (
		<Timeline items={items} orientation="horizontal" variant="spacious" />
	);
}

export {
	timelineVariants,
	timelineItemVariants,
	timelineConnectorVariants,
	timelineIconVariants,
};
