// doesnt work
var longestPalindrome = function (s) {
  if (s.length < 2) return s;
  let pos = {
    start: 0,
    end: 0,
  };

  function getCoords(str, _start, _end) {
    let start = _start;
    let end = _end;

    while (start > 0 && end <= str.length && str[start - 1] === str[end + 1]) {
      start -= 1;
      end += 1;
    }

    pos = end - start > pos.end - pos.start ? { start, end } : pos;
  }

  for (let i = 0; i < s.length - 1; i++) {
    // getCoords(s, i, i);
    getCoords(s, i, i + 1);
  }

  return s.slice(pos.start, pos.end + 1);
};

const a = "bbbasdfdsacv";
const c = "ccc";
const aa = "aaaa";
const abb = "abb";
const b =
  "kyyrjtdplseovzwjkykrjwhxquwxsfsorjiumvxjhjmgeueafubtonhlerrgsgohfosqssmizcuqryqomsipovhhodpfyudtusjhonlqabhxfahfcjqxyckycstcqwxvicwkjeuboerkmjshfgiglceycmycadpnvoeaurqatesivajoqdilynbcihnidbizwkuaoegmytopzdmvvoewvhebqzskseeubnretjgnmyjwwgcooytfojeuzcuyhsznbcaiqpwcyusyyywqmmvqzvvceylnuwcbxybhqpvjumzomnabrjgcfaabqmiotlfojnyuolostmtacbwmwlqdfkbfikusuqtupdwdrjwqmuudbcvtpieiwteqbeyfyqejglmxofdjksqmzeugwvuniaxdrunyunnqpbnfbgqemvamaxuhjbyzqmhalrprhnindrkbopwbwsjeqrmyqipnqvjqzpjalqyfvaavyhytetllzupxjwozdfpmjhjlrnitnjgapzrakcqahaqetwllaaiadalmxgvpawqpgecojxfvcgxsbrldktufdrogkogbltcezflyctklpqrjymqzyzmtlssnavzcquytcskcnjzzrytsvawkavzboncxlhqfiofuohehaygxidxsofhmhzygklliovnwqbwwiiyarxtoihvjkdrzqsnmhdtdlpckuayhtfyirnhkrhbrwkdymjrjklonyggqnxhfvtkqxoicakzsxmgczpwhpkzcntkcwhkdkxvfnjbvjjoumczjyvdgkfukfuldolqnauvoyhoheoqvpwoisniv";

console.log(longestPalindrome(abb));
