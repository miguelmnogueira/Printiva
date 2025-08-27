import {
	Dropzone,
	DropzoneContent,
	DropzoneEmptyState,
} from "@/components/ui/shadcn-io/dropzone";
import { useState } from "react";

const DropzoneField = ({
	files,
	setFiles,
}: {
	files: File[] | undefined;
	setFiles: (files: File[] | undefined) => void;
}) => {
	const [filePreview, setFilePreview] = useState<string | undefined>();
	const handleDrop = (files: File[]) => {
		console.log(files);
		setFiles(files);
		if (files.length > 0) {
			const reader = new FileReader();
			reader.onload = (e) => {
				if (typeof e.target?.result === "string") {
					setFilePreview(e.target?.result);
				}
			};
			reader.readAsDataURL(files[0]);
		}
	};
	return (
		<Dropzone
			accept={{ "image/*": [".png", ".jpg", ".jpeg"] }}
			onDrop={handleDrop}
			onError={console.error}
			src={files}
			maxSize={1024 * 1024 * 10}
			minSize={1024}
			className="w-full h-[100%]"
		>
			<DropzoneEmptyState />
			<DropzoneContent>
				{filePreview && (
					<div className="md:h-[102px] h-[150px] w-full">
						<img
							alt="Preview"
							className="absolute top-0 left-0 h-full w-full object-cover"
							src={filePreview}
						/>
					</div>
				)}
			</DropzoneContent>
		</Dropzone>
	);
};
export default DropzoneField;
