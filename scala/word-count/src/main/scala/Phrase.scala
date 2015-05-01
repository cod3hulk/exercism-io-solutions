/**
 * Class to count words in a phrase
 */
class Phrase(words: String) {

  def wordCount = words
    .split("[^\\w']+")
    .groupBy(_.toLowerCase)
    .mapValues(_.length)

}
