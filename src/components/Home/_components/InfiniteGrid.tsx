const InfiniteGrid = () => {
	return (
		<div className="relative mt-12 mb-20">
			<DraggableContainer variant="masonry">
				<GridBody>
					{images.map((image) => (
						<GridItem
							key={image.id}
							className="relative h-54 w-36 md:h-96 md:w-64"
						>
							<img
								src={image.src}
								alt={image.alt}
								className="pointer-events-none absolute h-full w-full object-cover"
							/>
						</GridItem>
					))}
				</GridBody>
			</DraggableContainer>
			<div className="absolute w-full h-full bg-radial from-transparent to-background top-0 left-0 pointer-events-none"></div>
		</div>
	);

	//TODO: Infinite Grid
};

export default InfiniteGrid;
