export interface MenuItem {
	name: string;
	hasLink: boolean;
	link?: string;
	hasSubItems: boolean;
	subItems?: MenuItem[];
}
export interface CarouselItem {
	src: string;
	label: string;
	alt?: string;
	link?: string;
}

export interface ProjectCarouselItem {
	src: string;
	label: string;
	alt?: string;
}
