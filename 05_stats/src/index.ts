import { MatchReader } from "./MathReader";
import { CsvFileReader } from "./CsvFileReader";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { Summary } from "./Summary";
import { HtmlReport } from "./reportTargets/HtmlReport";

// Create an object that satisfies the 'DataReader' interface
// const csvFileReader = new CsvFileReader("football.csv");
/* example: 
   for fetch from web
   1. should create reader for api
   2. inject apiReader to the MatchReader
   3. if need, implement new WinAnalysis and OutputTarget 
*/


// Create an instance of MatchReader and pass in something satisfying
const matchReader = MatchReader.fromCsv('football.csv');
const summary = Summary.winsAnalysisWithHtmlReport('Man United');

matchReader.load();

// const summary = new Summary(
//    new WinsAnalysis("Man United"),
//    new HtmlReport()
//    // new ConsoleReport()
// );

summary.buildAndPrintReport(matchReader.matches);
