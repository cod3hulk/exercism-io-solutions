/**
 * anagram matcher
 * @param word - initial word to match with possible anagrams
 */
class Anagram(val word: String) {

  def matches(anagrams: Seq[String]): Seq[String] = {
    anagrams.filter(anagram => {
      anagram.toLowerCase != word.toLowerCase &&
        anagram.toLowerCase.toCharArray.sorted.mkString == word.toLowerCase.toCharArray.sorted.mkString
    })
  }
}
