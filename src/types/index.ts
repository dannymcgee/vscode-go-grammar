export interface JsonObject {
	[key: string]: string | JsonObject | JsonObject[];
}

interface TMGrammarCaptures {
	[key: number]: {
		name: string;
	};
}

export interface TMGrammarScope {
	name?: string;
	comment?: string;
	match?: string | RegExp;
	begin?: string | RegExp;
	end?: string | RegExp;
	captures?: TMGrammarCaptures;
	beginCaptures?: TMGrammarCaptures;
	endCaptures?: TMGrammarCaptures;
	contentName?: string;
	patterns?: TMGrammarScope[];
	include?: string;
}

export interface TMGrammar {
	name: string;
	scopeName: string;
	injectionSelector?: string;
	patterns: TMGrammarScope[];
	repository: {
		[key: string]: TMGrammarScope;
	};
}
