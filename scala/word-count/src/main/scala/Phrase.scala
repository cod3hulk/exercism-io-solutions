/**
 * Class to count words in a phrase
 */
class Phrase(phrase: String) {

  def wordCount = phrase
    .toLowerCase
    .split("[^\\w']+")
    .groupBy(identity)
    .mapValues(_.length)

}
