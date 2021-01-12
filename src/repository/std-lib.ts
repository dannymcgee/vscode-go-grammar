import { TMGrammarScope } from '../types';

export const stdLib: TMGrammarScope = {
	match: /\b(archive|tar|zip|bufio|builtin|bytes|compress|bzip2|flate|gzip|lzw|zlib|container|heap|list|ring|context|crypto|aes|cipher|des|dsa|ecdsa|ed25519|elliptic|hmac|md5|rand|rc4|rsa|sha1|sha256|sha512|subtle|tls|x509|pkix|database|sql|driver|debug|dwarf|elf|gosym|macho|pe|plan9obj|encoding|ascii85|asn1|base32|base64|binary|csv|gob|hex|json|pem|xml|errors|expvar|flag|fmt|go|ast|build|constant|doc|format|importer|parser|printer|scanner|token|types|hash|adler32|crc32|crc64|fnv|maphash|html|template|image|color|palette|draw|gif|jpeg|png|index|suffixarray|io|ioutil|log|syslog|math|big|bits|cmplx|rand|mime|multipart|quotedprintable|net|http|cgi|cookiejar|fcgi|httptest|httptrace|httputil|pprof|mail|rpc|jsonrpc|smtp|textproto|url|os|exec|signal|user|path|filepath|plugin|reflect|regexp|syntax|runtime|cgo|msan|pprof|race|trace|sort|strconv|strings|sync|atomic|syscall|js|testing|iotest|quick|text|scanner|tabwriter|time|tzdata|unicode|utf16|utf8|unsafe)\b/,
	name: 'entity.name.type.module.go',
};
