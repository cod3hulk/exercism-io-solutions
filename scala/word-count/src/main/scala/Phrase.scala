/**
 * Class to count words in a phrase
 */
class Phrase(phrase: String) {

  private val WordRegex = "[\\w']+".r

  def wordCount = {
    WordRegex
      .findAllIn(phrase.toLowerCase)
      .foldLeft(Map.empty[String, Int].withDefaultValue(0)) {
      (counts, word) => counts + (word -> (counts(word) + 1))
    }
  }

}
