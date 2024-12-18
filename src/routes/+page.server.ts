import day1 from "../aoc/1";
import day2 from "../aoc/2";
import day3 from "../aoc/3";
import day4 from "../aoc/4";
import day5 from "../aoc/5";
import day6 from "../aoc/6";
import day7 from "../aoc/7";
import day8 from "../aoc/8";
import day9 from "../aoc/9";
import day10 from "../aoc/10";
import todo from "../aoc/x";
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => {
	return {
		1: day1(),
		2: day2(),
		3: day3(),
		4: day4(),
		5: day5(),
		6: day6(),
		7: day7(),
		8: day8(),
		9: day9(),
		10: day10(),
		11: todo(),
		12: todo(),
		13: todo(),
		14: todo(),
		15: todo(),
		16: todo(),
		17: todo(),
		18: todo(),
		19: todo(),
		20: todo(),
		21: todo(),
		22: todo(),
		23: todo(),
		24: todo(),
		25: todo(),
	}
};