var assert = require("assert");
var chai = require("chai");
chai.use(require("chai-string"));

describe("mbrowser test", async () => {
  let page, start;

  beforeEach(async () => {
    start = new Date();

    page = await browser.newPage();

    await page.setRequestInterception(true);
    page.on("request", (interceptedRequest) => {

      if(interceptedRequest.url().includes("gepiviz.science.roche.com")) {
        console.log(interceptedRequest.url())
      }

        // console.log("request intercepted, ", interceptedRequest.url());
      if (interceptedRequest.url() == "https://dev.gepiviz.science.roche.com/emd/api/v1/projects/") {
        console.log("matched projects");
        // interceptedRequest.abort();
         interceptedRequest.respond({
            status: 200,
            content: 'application/json; charset=utf-8',
            body: JSON.stringify([{"id":3,"user_list":["admin"],"description":"The epigenetic data from the Nott paper","project_id":"nott","owner_id":"admin","name":"Microglia epigenetic data from Nott et al.","genomes":["hg19"]},{"id":4,"user_list":["admin"],"description":"A bunch of tracks from the epigenome roadmap brain samples","project_id":"roadmap","owner_id":"admin","name":"Brain tracks from epigenome roadmap","genomes":["hg19"]},{"id":5,"user_list":["admin"],"description":"Peaks for epigenetic data from the Nott et al. study processed internally using the ENCODE pipelines","project_id":"internal_nott","owner_id":"admin","name":"Internally processed data from the Nott et al. study","genomes":["hg38"]},{"id":6,"user_list":["admin"],"description":"Downloaded Nott et al. study processed data lifted over to hg38","project_id":"nott_hg38","owner_id":"admin","name":"Data from the Nott et al. study (hg38)","genomes":["hg38"]},{"id":7,"user_list":["admin"],"description":"DNase-seq data for 9 ENCODE samples","project_id":"encode_test","owner_id":"admin","name":"Test collection of 9 ENCODE experiments","genomes":["hg19","hg38"]},{"id":8,"user_list":["admin"],"description":"DNase-seq data for 1 ENCODE experiment","project_id":"ENCSR000ENA","owner_id":"admin","name":"Test collection of 1 ENCODE experiments","genomes":["hg19","hg38"]},{"id":9,"user_list":["admin"],"description":"GWAS result data for the HG department","project_id":"hg_gwas_tracks","owner_id":"admin","name":"HG GWAS data tracks","genomes":["hg19"]},{"id":10,"user_list":["admin"],"description":"The epigenetic data from the Nott paper","project_id":"nott_efs","owner_id":"admin","name":"Microglia epigenetic data from Nott et al. EFS","genomes":["hg19"]},{"id":11,"user_list":["admin"],"description":"ATACseq of PDX HCI-011 after endocrine treatment: Samples from HCI-011 tumor-bearing mice treated with either Vehicle, Tamoxifen or GDC-9545","project_id":"FDB2683","owner_id":"admin","name":"FDB2683 - ATACseq of PDX HCI-011 after endocrine treatment","genomes":["hg38"]},{"id":12,"user_list":["admin"],"description":"Histone ChIP-seq fold change bigwig files","project_id":"FRS10486","owner_id":"admin","name":"FRS10486 - from project FDB6504, Mechanisms Controlling Human Microglia Gene Expression (Nott et al)","genomes":["hg38"]},{"id":13,"user_list":["admin"],"description":"Preliminary harmonized Nott et al collection on HELCULES","project_id":"nott_helcules","owner_id":"admin","name":"FDB6504 - Microglia epigenetic data from Nott et al. on HELCULES","genomes":["hg19"]},{"id":28,"user_list":[],"description":"DS000000267","project_id":"DS000000267","owner_id":"admin","name":"DS000000267","genomes":["hg38"]},{"id":29,"user_list":["kancherj"],"description":"DS000000264","project_id":"DS000000264","owner_id":"admin","name":"DS000000264","genomes":["hg38"]}])
          });
          console.log("response returned")
        // interceptedRequest.respond();
      }
      else if (interceptedRequest.url() == "https://dev.gepiviz.science.roche.com/emd/api/v1/projects/nott/collections") {
        console.log("matched collections")
        // interceptedRequest.abort();
        interceptedRequest.respond({
            status: 200,
            content: 'application/json; charset=utf-8',
            body: JSON.stringify([{"collection_id":"nott::nott","project_id":3,"name":"Microglia epigenetic data from Nott et al.","description":"The epigenetic data from the Nott paper","genomes":["hg19"],"tags":null,"id":2}])
          });
        // interceptedRequest.respond();
      } 
      else if (interceptedRequest.url() == "https://dev.gepiviz.science.roche.com/emd/api/v1/collections/nott::nott/ms") {
        console.log("matched ms")
        // interceptedRequest.abort();
        interceptedRequest.respond({
            status: 200,
            content: 'application/json; charset=utf-8',
            body: JSON.stringify([{"collection_id":2,"measurement_id":"nott::nott::LHX2_enhancers","name":"LHX2 enhancers","description":null,"genome":"hg19","datatype":"annotation","file_type":"bigbed","annotation":{"source":"FireDB","type":"LHX2","kind":"enhancers"},"metadata":[],"url":"nott::nott::LHX2_enhancers","id":17},{"collection_id":2,"measurement_id":"nott::nott::NeuN_enhancers","name":"NeuN enhancers","description":null,"genome":"hg19","datatype":"annotation","file_type":"bigbed","annotation":{"source":"FireDB","type":"NeuN","kind":"enhancers"},"metadata":[],"url":"nott::nott::NeuN_enhancers","id":18},{"collection_id":2,"measurement_id":"nott::nott::NeuN_promoters","name":"NeuN promoters","description":null,"genome":"hg19","datatype":"annotation","file_type":"bigbed","annotation":{"source":"FireDB","type":"NeuN","kind":"promoters"},"metadata":[],"url":"nott::nott::NeuN_promoters","id":19},{"collection_id":2,"measurement_id":"nott::nott::Olig2_enhancers","name":"Olig2 enhancers","description":null,"genome":"hg19","datatype":"annotation","file_type":"bigbed","annotation":{"source":"FireDB","type":"Olig2","kind":"enhancers"},"metadata":[],"url":"nott::nott::Olig2_enhancers","id":20},{"collection_id":2,"measurement_id":"nott::nott::Olig2_promoters","name":"Olig2 promoters","description":null,"genome":"hg19","datatype":"annotation","file_type":"bigbed","annotation":{"source":"FireDB","type":"Olig2","kind":"promoters"},"metadata":[],"url":"nott::nott::Olig2_promoters","id":21},{"collection_id":2,"measurement_id":"nott::nott::PU1_enhancers","name":"PU1 enhancers","description":null,"genome":"hg19","datatype":"annotation","file_type":"bigbed","annotation":{"source":"FireDB","type":"PU1","kind":"enhancers"},"metadata":[],"url":"nott::nott::PU1_enhancers","id":22},{"collection_id":2,"measurement_id":"nott::nott::PU1_promoters","name":"PU1 promoters","description":null,"genome":"hg19","datatype":"annotation","file_type":"bigbed","annotation":{"source":"FireDB","type":"PU1","kind":"promoters"},"metadata":[],"url":"nott::nott::PU1_promoters","id":23},{"collection_id":2,"measurement_id":"nott::nott::LHX2nuclei_atac","name":"LHX2nuclei atac","description":null,"genome":"hg19","datatype":"bp","file_type":"bigwig","annotation":{"source":"FireDB","type":"LHX2nuclei","marker":"atac"},"metadata":[],"url":"nott::nott::LHX2nuclei_atac","id":24},{"collection_id":2,"measurement_id":"nott::nott::LHX2nuclei_H3K27ac","name":"LHX2nuclei H3K27ac","description":null,"genome":"hg19","datatype":"bp","file_type":"bigwig","annotation":{"source":"FireDB","type":"LHX2nuclei","marker":"H3K27ac"},"metadata":[],"url":"nott::nott::LHX2nuclei_H3K27ac","id":25},{"collection_id":2,"measurement_id":"nott::nott::LHX2nuclei_H3K4me3","name":"LHX2nuclei H3K4me3","description":null,"genome":"hg19","datatype":"bp","file_type":"bigwig","annotation":{"source":"FireDB","type":"LHX2nuclei","marker":"H3K4me3"},"metadata":[],"url":"nott::nott::LHX2nuclei_H3K4me3","id":26},{"collection_id":2,"measurement_id":"nott::nott::microglia_atac","name":"microglia atac","description":null,"genome":"hg19","datatype":"bp","file_type":"bigwig","annotation":{"source":"FireDB","type":"microglia","marker":"atac"},"metadata":[],"url":"nott::nott::microglia_atac","id":27},{"collection_id":2,"measurement_id":"nott::nott::microglia_H3K27ac","name":"microglia H3K27ac","description":null,"genome":"hg19","datatype":"bp","file_type":"bigwig","annotation":{"source":"FireDB","type":"microglia","marker":"H3K27ac"},"metadata":[],"url":"nott::nott::microglia_H3K27ac","id":28},{"collection_id":2,"measurement_id":"nott::nott::NEUNnuclei_atac","name":"NEUNnuclei atac","description":null,"genome":"hg19","datatype":"bp","file_type":"bigwig","annotation":{"source":"FireDB","type":"NEUNnuclei","marker":"atac"},"metadata":[],"url":"nott::nott::NEUNnuclei_atac","id":29},{"collection_id":2,"measurement_id":"nott::nott::NEUNnuclei_H3K27ac","name":"NEUNnuclei H3K27ac","description":null,"genome":"hg19","datatype":"bp","file_type":"bigwig","annotation":{"source":"FireDB","type":"NEUNnuclei","marker":"H3K27ac"},"metadata":[],"url":"nott::nott::NEUNnuclei_H3K27ac","id":30},{"collection_id":2,"measurement_id":"nott::nott::NEUNnuclei_H3K4me3","name":"NEUNnuclei H3K4me3","description":null,"genome":"hg19","datatype":"bp","file_type":"bigwig","annotation":{"source":"FireDB","type":"NEUNnuclei","marker":"H3K4me3"},"metadata":[],"url":"nott::nott::NEUNnuclei_H3K4me3","id":31},{"collection_id":2,"measurement_id":"nott::nott::OLIG2nuclei_atac","name":"OLIG2nuclei atac","description":null,"genome":"hg19","datatype":"bp","file_type":"bigwig","annotation":{"source":"FireDB","type":"OLIG2nuclei","marker":"atac"},"metadata":[],"url":"nott::nott::OLIG2nuclei_atac","id":32},{"collection_id":2,"measurement_id":"nott::nott::OLIG2nuclei_H3K27ac","name":"OLIG2nuclei H3K27ac","description":null,"genome":"hg19","datatype":"bp","file_type":"bigwig","annotation":{"source":"FireDB","type":"OLIG2nuclei","marker":"H3K27ac"},"metadata":[],"url":"nott::nott::OLIG2nuclei_H3K27ac","id":33},{"collection_id":2,"measurement_id":"nott::nott::OLIG2nuclei_H3K4me3","name":"OLIG2nuclei H3K4me3","description":null,"genome":"hg19","datatype":"bp","file_type":"bigwig","annotation":{"source":"FireDB","type":"OLIG2nuclei","marker":"H3K4me3"},"metadata":[],"url":"nott::nott::OLIG2nuclei_H3K4me3","id":34},{"collection_id":2,"measurement_id":"nott::nott::peripheralPU1nuclei_atac","name":"peripheralPU1nuclei atac","description":null,"genome":"hg19","datatype":"bp","file_type":"bigwig","annotation":{"source":"FireDB","type":"peripheralPU1nuclei","marker":"atac"},"metadata":[],"url":"nott::nott::peripheralPU1nuclei_atac","id":35},{"collection_id":2,"measurement_id":"nott::nott::peripheralPU1nuclei_H3K27ac","name":"peripheralPU1nuclei H3K27ac","description":null,"genome":"hg19","datatype":"bp","file_type":"bigwig","annotation":{"source":"FireDB","type":"peripheralPU1nuclei","marker":"H3K27ac"},"metadata":[],"url":"nott::nott::peripheralPU1nuclei_H3K27ac","id":36},{"collection_id":2,"measurement_id":"nott::nott::PU1nuclei_atac","name":"PU1nuclei atac","description":null,"genome":"hg19","datatype":"bp","file_type":"bigwig","annotation":{"source":"FireDB","type":"PU1nuclei","marker":"atac"},"metadata":[],"url":"nott::nott::PU1nuclei_atac","id":37},{"collection_id":2,"measurement_id":"nott::nott::PU1nuclei_H3K27ac","name":"PU1nuclei H3K27ac","description":null,"genome":"hg19","datatype":"bp","file_type":"bigwig","annotation":{"source":"FireDB","type":"PU1nuclei","marker":"H3K27ac"},"metadata":[],"url":"nott::nott::PU1nuclei_H3K27ac","id":38},{"collection_id":2,"measurement_id":"nott::nott::PU1nuclei_H3K4me3","name":"PU1nuclei H3K4me3","description":null,"genome":"hg19","datatype":"bp","file_type":"bigwig","annotation":{"source":"FireDB","type":"PU1nuclei","marker":"H3K4me3"},"metadata":[],"url":"nott::nott::PU1nuclei_H3K4me3","id":39},{"collection_id":2,"measurement_id":"nott::nott::neun_5k_interactions","name":"NeuN 5k_interactions","description":"5k interactions (PLAC-seq) for NeuN","genome":"hg19","datatype":"annotation","file_type":"interaction_bigbed","annotation":{"source":"FireDB","type":"NeuN","kind":"plac-seq"},"metadata":[],"url":"nott::nott::neun_5k_interactions","id":40},{"collection_id":2,"measurement_id":"nott::nott::microglia_5k_interactions","name":"microglia 5k_interactions","description":"5k interactions (PLAC-seq) for microglia","genome":"hg19","datatype":"annotation","file_type":"interaction_bigbed","annotation":{"source":"FireDB","type":"microglia","kind":"plac-seq"},"metadata":[],"url":"nott::nott::microglia_5k_interactions","id":41},{"collection_id":2,"measurement_id":"nott::nott::olig2_5k_interactions","name":"Olig2 5k_interactions","description":"5k interactions (PLAC-seq) for Olig2","genome":"hg19","datatype":"annotation","file_type":"interaction_bigbed","annotation":{"source":"FireDB","type":"Olig2","kind":"plac-seq"},"metadata":[],"url":"nott::nott::olig2_5k_interactions","id":42},{"collection_id":2,"measurement_id":"nott::nott::jansen_ad_credible_set","name":"Jansen et al. AD credible variant set","description":"Alzheimer's disease credible variant set from Jansen et al. [PMID 30617256]","genome":"hg19","datatype":"annotation","file_type":"gwas","annotation":{"kind":"gwas-set"},"metadata":["name","score","rs_id"],"url":"nott::nott::jansen_ad_credible_set","id":43}])
          });
        // interceptedRequest.respond()
      }
      else if(interceptedRequest.url() == "https://dev.gepiviz.science.roche.com/emd/api/v1/projects/roadmap/collections") {
        console.log("matched ms")
        // interceptedRequest.abort();
        interceptedRequest.respond({
            status: 200,
            content: 'application/json; charset=utf-8',
            body: JSON.stringify([{"collection_id":"roadmap::roadmap","project_id":4,"name":"Brain tracks from epigenome roadmap","description":"A bunch of tracks from the epigenome roadmap brain samples","genomes":["hg19"],"tags":null,"id":3}])
          });
        // interceptedRequest.respond()
      }
      else if(interceptedRequest.url() == "https://dev.gepiviz.science.roche.com/emd/api/v1/collections/roadmap::roadmap/ms") {
        console.log("matched ms")
        // interceptedRequest.abort();
        interceptedRequest.respond({
            status: 200,
            content: 'application/json; charset=utf-8',
            body: JSON.stringify([{"collection_id":3,"measurement_id":"roadmap::roadmap::Neurosphere_Cultured_Cells_Cortex_Derived_H3K4me3","name":"Neurosphere_Cultured_Cells_Cortex_Derived H3K4me3","description":null,"genome":"hg19","datatype":"bp","file_type":"bigwig","annotation":{"source":"roadmap","type":"Neurosphere_Cultured_Cells_Cortex_Derived","marker":"H3K4me3"},"metadata":[],"url":"roadmap::roadmap::Neurosphere_Cultured_Cells_Cortex_Derived_H3K4me3","id":44},{"collection_id":3,"measurement_id":"roadmap::roadmap::Neurosphere_Cultured_Cells_Ganglionic_Eminence_Derived_H3K4me3","name":"Neurosphere_Cultured_Cells_Ganglionic_Eminence_Derived H3K4me3","description":null,"genome":"hg19","datatype":"bp","file_type":"bigwig","annotation":{"source":"roadmap","type":"Neurosphere_Cultured_Cells_Ganglionic_Eminence_Derived","marker":"H3K4me3"},"metadata":[],"url":"roadmap::roadmap::Neurosphere_Cultured_Cells_Ganglionic_Eminence_Derived_H3K4me3","id":45},{"collection_id":3,"measurement_id":"roadmap::roadmap::Brain_Angular_Gyrus_H3K4me3","name":"Angular Gyrus H3K4me3","description":null,"genome":"hg19","datatype":"bp","file_type":"bigwig","annotation":{"source":"roadmap","type":"Brain_Angular_Gyrus","marker":"H3K4me3"},"metadata":[],"url":"roadmap::roadmap::Brain_Angular_Gyrus_H3K4me3","id":46},{"collection_id":3,"measurement_id":"roadmap::roadmap::Brain_Angular_Gyrus_H3K27ac","name":"Angular Gyrus H3K27ac","description":null,"genome":"hg19","datatype":"bp","file_type":"bigwig","annotation":{"source":"roadmap","type":"Brain_Angular_Gyrus","marker":"H3K27ac"},"metadata":[],"url":"roadmap::roadmap::Brain_Angular_Gyrus_H3K27ac","id":47},{"collection_id":3,"measurement_id":"roadmap::roadmap::Brain_Anterior_Caudate_H3K4me3","name":"Anterior Caudate H3K4me3","description":null,"genome":"hg19","datatype":"bp","file_type":"bigwig","annotation":{"source":"roadmap","type":"Brain_Anterior_Caudate","marker":"H3K4me3"},"metadata":[],"url":"roadmap::roadmap::Brain_Anterior_Caudate_H3K4me3","id":48},{"collection_id":3,"measurement_id":"roadmap::roadmap::Brain_Anterior_Caudate_H3K27ac","name":"Anterior Caudate H3K27ac","description":null,"genome":"hg19","datatype":"bp","file_type":"bigwig","annotation":{"source":"roadmap","type":"Brain_Anterior_Caudate","marker":"H3K27ac"},"metadata":[],"url":"roadmap::roadmap::Brain_Anterior_Caudate_H3K27ac","id":49},{"collection_id":3,"measurement_id":"roadmap::roadmap::Brain_Cingulate_Gyrus_H3K4me3","name":"Cingulate Gyrus H3K4me3","description":null,"genome":"hg19","datatype":"bp","file_type":"bigwig","annotation":{"source":"roadmap","type":"Brain_Cingulate_Gyrus","marker":"H3K4me3"},"metadata":[],"url":"roadmap::roadmap::Brain_Cingulate_Gyrus_H3K4me3","id":50},{"collection_id":3,"measurement_id":"roadmap::roadmap::Brain_Cingulate_Gyrus_H3K27ac","name":"Cingulate Gyrus H3K27ac","description":null,"genome":"hg19","datatype":"bp","file_type":"bigwig","annotation":{"source":"roadmap","type":"Brain_Cingulate_Gyrus","marker":"H3K27ac"},"metadata":[],"url":"roadmap::roadmap::Brain_Cingulate_Gyrus_H3K27ac","id":51},{"collection_id":3,"measurement_id":"roadmap::roadmap::Brain_Germinal_Matrix_H3K4me3","name":"Germinal Matrix H3K4me3","description":null,"genome":"hg19","datatype":"bp","file_type":"bigwig","annotation":{"source":"roadmap","type":"Brain_Germinal_Matrix","marker":"H3K4me3"},"metadata":[],"url":"roadmap::roadmap::Brain_Germinal_Matrix_H3K4me3","id":52},{"collection_id":3,"measurement_id":"roadmap::roadmap::Brain_Hippocampus_Middle_H3K4me3","name":"Hippocampus Middle H3K4me3","description":null,"genome":"hg19","datatype":"bp","file_type":"bigwig","annotation":{"source":"roadmap","type":"Brain_Hippocampus_Middle","marker":"H3K4me3"},"metadata":[],"url":"roadmap::roadmap::Brain_Hippocampus_Middle_H3K4me3","id":53},{"collection_id":3,"measurement_id":"roadmap::roadmap::Brain_Hippocampus_Middle_H3K27ac","name":"Hippocampus Middle H3K27ac","description":null,"genome":"hg19","datatype":"bp","file_type":"bigwig","annotation":{"source":"roadmap","type":"Brain_Hippocampus_Middle","marker":"H3K27ac"},"metadata":[],"url":"roadmap::roadmap::Brain_Hippocampus_Middle_H3K27ac","id":54},{"collection_id":3,"measurement_id":"roadmap::roadmap::Brain_Inferior_Temporal_Lobe_H3K4me3","name":"Inferior Temporal Lobe H3K4me3","description":null,"genome":"hg19","datatype":"bp","file_type":"bigwig","annotation":{"source":"roadmap","type":"Brain_Inferior_Temporal_Lobe","marker":"H3K4me3"},"metadata":[],"url":"roadmap::roadmap::Brain_Inferior_Temporal_Lobe_H3K4me3","id":55},{"collection_id":3,"measurement_id":"roadmap::roadmap::Brain_Inferior_Temporal_Lobe_H3K27ac","name":"Inferior Temporal Lobe H3K27ac","description":null,"genome":"hg19","datatype":"bp","file_type":"bigwig","annotation":{"source":"roadmap","type":"Brain_Inferior_Temporal_Lobe","marker":"H3K27ac"},"metadata":[],"url":"roadmap::roadmap::Brain_Inferior_Temporal_Lobe_H3K27ac","id":56},{"collection_id":3,"measurement_id":"roadmap::roadmap::Brain_Dorsolateral_Prefrontal_Cortex_H3K4me3","name":"Dorsolateral Prefrontal Cortex H3K4me3","description":null,"genome":"hg19","datatype":"bp","file_type":"bigwig","annotation":{"source":"roadmap","type":"Brain_Dorsolateral_Prefrontal_Cortex","marker":"H3K4me3"},"metadata":[],"url":"roadmap::roadmap::Brain_Dorsolateral_Prefrontal_Cortex_H3K4me3","id":57},{"collection_id":3,"measurement_id":"roadmap::roadmap::Brain_Dorsolateral_Prefrontal_Cortex_H3K27ac","name":"Dorsolateral Prefrontal Cortex H3K27ac","description":null,"genome":"hg19","datatype":"bp","file_type":"bigwig","annotation":{"source":"roadmap","type":"Brain_Dorsolateral_Prefrontal_Cortex","marker":"H3K27ac"},"metadata":[],"url":"roadmap::roadmap::Brain_Dorsolateral_Prefrontal_Cortex_H3K27ac","id":58},{"collection_id":3,"measurement_id":"roadmap::roadmap::Brain_Substantia_Nigra_H3K4me3","name":"Substantia Nigra H3K4me3","description":null,"genome":"hg19","datatype":"bp","file_type":"bigwig","annotation":{"source":"roadmap","type":"Brain_Substantia_Nigra","marker":"H3K4me3"},"metadata":[],"url":"roadmap::roadmap::Brain_Substantia_Nigra_H3K4me3","id":59},{"collection_id":3,"measurement_id":"roadmap::roadmap::Brain_Substantia_Nigra_H3K27ac","name":"Substantia Nigra H3K27ac","description":null,"genome":"hg19","datatype":"bp","file_type":"bigwig","annotation":{"source":"roadmap","type":"Brain_Substantia_Nigra","marker":"H3K27ac"},"metadata":[],"url":"roadmap::roadmap::Brain_Substantia_Nigra_H3K27ac","id":60}])
          });
        // interceptedRequest.respond()
      }
      else {
        interceptedRequest.continue();
      }
      // interceptedRequest.continue();
    });

    await page.goto(baseUrl);

    // await page.setViewport({ width: 1920, height: 1040 });
  });

  afterEach(async function () {
    await page.close();
    console.log("elapsed time: ", new Date() - start);
  });

  it("check enabling/disabling of the selection type dropdown", async () => {
    await page.waitForSelector(
      "shadowDom/epiviz-measurement-browser|paper-button"
    );
    const { button_text, visibility } = await page.$eval(
      "shadowDom/epiviz-measurement-browser|paper-button",
      (button) => {
        button.click();
        return {
          button_text: button.textContent.trim(),
          visibility: button.getComputedStyleValue("visibility"),
        };
      }
    );

    await page.waitForSelector(
      "shadowDom/#measurement > epiviz-measurement-browser|#cardElem|#cardContainer > paper-card"
    );
    const measurements2 = await page.$$eval(
      "shadowDom/#measurement > epiviz-measurement-browser|#cardElem@#cardContainer > paper-card",
      (measurements) => {
        return measurements.length;x
      }
    );
    assert.strictEqual(measurements2 > 1, true);

    // click select all
    await page.waitForSelector(
      "shadowDom/epiviz-measurement-browser|#cardElem|#selectionContainer  > div.cardselectall > paper-button"
    );
    const select_all_button = await page.$eval(
      "shadowDom/epiviz-measurement-browser|#cardElem|#selectionContainer  > div.cardselectall > paper-button",
      (button) => {
        button.click();

        console.log("button", button);
        return button.textContent.trim();
      }
    );

    await page.waitForSelector(
      "shadowDom/epiviz-measurement-browser|#cardElem|#selectionContainer > paper-dropdown-menu:nth-child(3)[disabled]"
    );
    const select_all_disabled_button = await page.$eval(
      "shadowDom/epiviz-measurement-browser|#cardElem|#selectionContainer > paper-dropdown-menu:nth-child(3)[disabled]",
      (button) => {
        return button.textContent.replaceAll('\n', '').replaceAll(' ', '');
      }
    );
     // check cahrt type
    await page.waitForSelector(
      "shadowDom/epiviz-measurement-browser|#modal > div.header > div:nth-child(3) > paper-dropdown-menu[disabled]"
    );

    const selected_chart_type1 = await page.$eval(
      "shadowDom/epiviz-measurement-browser|#modal > div.header > div:nth-child(3) > paper-dropdown-menu[disabled]",
      (button) => {
        return button.textContent.trim();
      }
    );
    console.log('selected cahrt ', selected_chart_type1);
  
    const clear_all = await page.$eval(
      "shadowDom/epiviz-measurement-browser|#cardElem|#selectedContainer > div.clearallcontainer > paper-button",
      (button) => {
        button.click()
        return button.textContent.trim();
      }
    );


    await page.waitForSelector(
      "shadowDom/#measurement > epiviz-measurement-browser|#cardElem|#cardContainer > paper-card"
    );
    const measurements3 = await page.$$eval(
      "shadowDom/#measurement > epiviz-measurement-browser|#cardElem@#cardContainer > paper-card",
      (measurements) => {
        return measurements.length;x
      }
    );
    assert.strictEqual(measurements3 > 1, true);


    // check cahrt type
    await page.waitForSelector(
      "shadowDom/epiviz-measurement-browser|#modal > div.header > div:nth-child(3) > paper-dropdown-menu"
    );

    const selected_chart_type = await page.$eval(
      "shadowDom/epiviz-measurement-browser|#modal > div.header > div:nth-child(3) > paper-dropdown-menu",
      (button) => {
        return button.textContent.trim();
      }
    );
    chai.assert.isOk(selected_chart_type, 'disabled correctly');
  });

  /*
  it("check that chart type is persisted between projects", async () => {
    await page.waitForSelector(
      "shadowDom/epiviz-measurement-browser|paper-button"
    );
    const { button_text, visibility } = await page.$eval(
      "shadowDom/epiviz-measurement-browser|paper-button ",
      (button) => {
        button.click();
        return {
          button_text: button.textContent.trim(),
          visibility: button.getComputedStyleValue("visibility"),
        };
      }
    );

    await page.waitForSelector(
      "shadowDom/#measurement > epiviz-measurement-browser|#cardElem|#cardContainer > paper-card"
    );
    const measurements2 = await page.$$eval(
      "shadowDom/#measurement > epiviz-measurement-browser|#cardElem@#cardContainer > paper-card",
      (measurements) => {
        measurements[0].querySelector("paper-icon-button").click();
        measurements[1].querySelector("paper-icon-button").click();
        return measurements.length;
      }
    );
    assert.strictEqual(measurements2 > 1, true);

    // check cahrt type
    await page.waitForSelector(
      "shadowDom/epiviz-measurement-browser|#modal > div.header > div:nth-child(3) > paper-dropdown-menu > paper-listbox > paper-item.iron-selected"
    );
    const selected_chart_type = await page.$eval(
      "shadowDom/epiviz-measurement-browser|#modal > div.header > div:nth-child(3) > paper-dropdown-menu > paper-listbox > paper-item.iron-selected",
      (button) => {
        return button.textContent.trim();
      }
    );
    console.log('selected cahrt ', selected_chart_type);
    
    await page.waitForSelector(
      "shadowDom/epiviz-measurement-browser|#collectionProject|#menuButton > div > paper-input"
    );
    await page.$eval(
      "shadowDom/epiviz-measurement-browser|#collectionProject|#menuButton > div > paper-input",
      (project_selection) => project_selection.click()
    );

    await page.waitForSelector(
      "shadowDom/epiviz-measurement-browser|#collectionProject > paper-listbox > paper-item"
    );
    await page.$$eval(
      "shadowDom/epiviz-measurement-browser@#collectionProject > paper-listbox > paper-item",
      (projects) => projects[2].click()
    );

    await page.waitForSelector(
      "shadowDom/#measurement > epiviz-measurement-browser|#cardElem|#cardContainer > paper-card"
    );
    const measurements3 = await page.$$eval(
      "shadowDom/#measurement > epiviz-measurement-browser|#cardElem@#cardContainer > paper-card",
      (measurements) => {
        measurements[0].querySelector("paper-icon-button").click();
        measurements[1].querySelector("paper-icon-button").click();
        console.log("measurements", measurements);
        return measurements.length;
      }
    );
    // check cahrt type again
    await page.waitForSelector(
      "shadowDom/epiviz-measurement-browser|#modal > div.header > div:nth-child(3) > paper-dropdown-menu > paper-listbox > paper-item.iron-selected"
    );
    const currently_selected_chart_type = await page.$eval(
      "shadowDom/epiviz-measurement-browser|#modal > div.header > div:nth-child(3) > paper-dropdown-menu > paper-listbox > paper-item.iron-selected",
      (button) => {
        return button.textContent.trim();
      }
    );
    console.log('currently selected cahrt ', currently_selected_chart_type);
    
    chai.assert.equalIgnoreCase(
      selected_chart_type,
      currently_selected_chart_type,
      "select All button have not disabled"
    );
  });

  it("check select all button for second project", async () => {
    await page.waitForSelector(
      "shadowDom/epiviz-measurement-browser|paper-button"
    );
    const { button_text, visibility } = await page.$eval(
      "shadowDom/epiviz-measurement-browser|paper-button ",
      (button) => {
        button.click();
        return {
          button_text: button.textContent.trim(),
          visibility: button.getComputedStyleValue("visibility"),
        };
      }
    );

    await page.waitForSelector(
      "shadowDom/#measurement > epiviz-measurement-browser|#cardElem|#cardContainer > paper-card"
    );
    const measurements2 = await page.$$eval(
      "shadowDom/#measurement > epiviz-measurement-browser|#cardElem@#cardContainer > paper-card",
      (measurements) => {
        measurements[0].querySelector("paper-icon-button").click();
        measurements[1].querySelector("paper-icon-button").click();
        console.log("measurements", measurements);
        return measurements.length;x
      }
    );
    assert.strictEqual(measurements2 > 1, true);
    console.log(`measurements length "${measurements2}" `);

    // click select all
    await page.waitForSelector(
      "shadowDom/epiviz-measurement-browser|#cardElem|#selectionContainer > div.cardselectall > paper-button"
    );
    const select_all_button = await page.$eval(
      "shadowDom/epiviz-measurement-browser|#cardElem|#selectionContainer > div.cardselectall > paper-button",
      (button) => {
        button.click();

        console.log("button", button);
        return button.textContent.trim();
      }
    );

    await page.waitForSelector(
      "shadowDom/epiviz-measurement-browser|#cardElem|#selectionContainer > div.cardselectall > paper-button[disabled]"
    );
    const select_all_disabled_button = await page.$eval(
      "shadowDom/epiviz-measurement-browser|#cardElem|#selectionContainer > div.cardselectall > paper-button[disabled]",
      (button) => {
        return button.textContent.trim();
      }
    );
    
    chai.assert.equalIgnoreCase(
      select_all_disabled_button,
      "select All",
      "select All button have not disabled"
    );

    await page.waitForSelector(
      "shadowDom/epiviz-measurement-browser|#collectionProject|#menuButton > div > paper-input"
    );
    await page.$eval(
      "shadowDom/epiviz-measurement-browser|#collectionProject|#menuButton > div > paper-input",
      (project_selection) => project_selection.click()
    );

    await page.waitForSelector(
      "shadowDom/epiviz-measurement-browser|#collectionProject > paper-listbox > paper-item"
    );
    await page.$$eval(
      "shadowDom/epiviz-measurement-browser@#collectionProject > paper-listbox > paper-item",
      (projects) => projects[2].click()
    );

    // click select all
    await page.waitForSelector(
      "shadowDom/epiviz-measurement-browser|#cardElem|#selectionContainer  > div.cardselectall > paper-button"
    );

    await page.waitForSelector(
      "shadowDom/epiviz-measurement-browser|#cardElem|#selectionContainer  > div.cardselectall > paper-button[disabled]"
    );
    const select_all_disabled_button_again = await page.$eval(
      "shadowDom/epiviz-measurement-browser|#cardElem|#selectionContainer  > div.cardselectall > paper-button[disabled]",
      (button) => {
        button.click();
        return button.textContent.trim();
      }
    );
    
    chai.assert.equalIgnoreCase(
      select_all_disabled_button_again,
      "select All",
      "select All button have not disabled"
    );
  });
  
  it("check disabling of the Selection type Dropdown", async () => {
    await page.waitForSelector(
      "shadowDom/epiviz-measurement-browser|paper-button"
    );
    const { button_text, visibility } = await page.$eval(
      "shadowDom/epiviz-measurement-browser|paper-button",
      (button) => {
        button.click();
        return {
          button_text: button.textContent.trim(),
          visibility: button.getComputedStyleValue("visibility"),
        };
      }
    );

    await page.waitForSelector(
      "shadowDom/#measurement > epiviz-measurement-browser|#cardElem|#cardContainer > paper-card"
    );
    const measurements2 = await page.$$eval(
      "shadowDom/#measurement > epiviz-measurement-browser|#cardElem@#cardContainer > paper-card",
      (measurements) => {
        measurements[0].querySelector("paper-icon-button").click();
        measurements[1].querySelector("paper-icon-button").click();
        console.log("measurements", measurements);
        return measurements.length;x
      }
    );
    assert.strictEqual(measurements2 > 1, true);

    // click select all
    await page.waitForSelector(
      "shadowDom/epiviz-measurement-browser|#cardElem|#selectionContainer  > div.cardselectall > paper-button"
    );
    const select_all_button = await page.$eval(
      "shadowDom/epiviz-measurement-browser|#cardElem|#selectionContainer  > div.cardselectall > paper-button",
      (button) => {
        button.click();

        console.log("button", button);
        return button.textContent.trim();
      }
    );

    await page.waitForSelector(
      "shadowDom/epiviz-measurement-browser|#cardElem|#selectionContainer > paper-dropdown-menu:nth-child(3)[disabled]"
    );
    const select_all_disabled_button = await page.$eval(
      "shadowDom/epiviz-measurement-browser|#cardElem|#selectionContainer > paper-dropdown-menu:nth-child(3)[disabled]",
      (button) => {
        return button.textContent.replaceAll('\n', '').replaceAll(' ', '');
      }
    );
    chai.assert.equalIgnoreCase(
      select_all_disabled_button,
      `AutoManual`,
      "selection type Dropdown didnt't disabled"
    );
  });
  
  it("check select all button disabled", async () => {
    await page.waitForSelector(
      "shadowDom/epiviz-measurement-browser|paper-button"
    );
    const { button_text, visibility } = await page.$eval(
      "shadowDom/epiviz-measurement-browser|paper-button ",
      (button) => {
        button.click();
        return {
          button_text: button.textContent.trim(),
          visibility: button.getComputedStyleValue("visibility"),
        };
      }
    );

    await page.waitForSelector(
      "shadowDom/#measurement > epiviz-measurement-browser|#cardElem|#cardContainer > paper-card"
    );
    const measurements2 = await page.$$eval(
      "shadowDom/#measurement > epiviz-measurement-browser|#cardElem@#cardContainer > paper-card",
      (measurements) => {
        measurements[0].querySelector("paper-icon-button").click();
        measurements[1].querySelector("paper-icon-button").click();
        console.log("measurements", measurements);
        return measurements.length;x
      }
    );
    assert.strictEqual(measurements2 > 1, true);
    console.log(`measurements length "${measurements2}" `);

    // click select all
    await page.waitForSelector(
      "shadowDom/epiviz-measurement-browser|#cardElem|#selectionContainer  > div.cardselectall > paper-button"
    );
    const select_all_button = await page.$eval(
      "shadowDom/epiviz-measurement-browser|#cardElem|#selectionContainer  > div.cardselectall > paper-button",
      (button) => {
        button.click();

        console.log("button", button);
        return button.textContent.trim();
      }
    );

    await page.waitForSelector(
      "shadowDom/epiviz-measurement-browser|#cardElem|#selectionContainer  > div.cardselectall > paper-button[disabled]"
    );
    const select_all_disabled_button = await page.$eval(
      "shadowDom/epiviz-measurement-browser|#cardElem|#selectionContainer  > div.cardselectall > paper-button[disabled]",
      (button) => {
        button.click();

        console.log("button", button);
        return button.textContent.trim();
      }
    );
    
    chai.assert.equalIgnoreCase(
      select_all_disabled_button,
      "select All",
      "select All button have not disabled"
    );
  });

  it("erase selected measurements after reopen dialog", async () => {
    await page.waitForSelector(
      "shadowDom/epiviz-measurement-browser|paper-button"
    );
    const { button_text, visibility } = await page.$eval(
      "shadowDom/epiviz-measurement-browser|paper-button ",
      (button) => {
        button.click();
        return {
          button_text: button.textContent.trim(),
          visibility: button.getComputedStyleValue("visibility"),
        };
      }
    );
    console.log(
      `button "${button_text}" with visibility "${visibility}" clicked`
    );
    assert.equal(visibility, "visible");

    await page.waitForSelector(
      "shadowDom/#measurement > epiviz-measurement-browser|#cardElem|#cardContainer > paper-card"
    );
    const measurements = await page.$$eval(
      "shadowDom/#measurement > epiviz-measurement-browser|#cardElem@#cardContainer > paper-card",
      (measurements) => {
        measurements[0].querySelector("paper-icon-button").click();
        measurements[1].querySelector("paper-icon-button").click();
        console.log("measurements", measurements);
        return measurements.length;
      }
    );
    assert.strictEqual(measurements > 1, true);
    console.log(`measurements length "${measurements}" `);

    await page.waitForSelector(
      "shadowDom/#measurement > epiviz-measurement-browser|#cardElem|#selectedContainer > paper-listbox > paper-icon-item"
    );
    let selected_measurements = await page.$$eval(
      "shadowDom/#measurement > epiviz-measurement-browser|#cardElem@#selectedContainer > paper-listbox > paper-icon-item",
      (measurements) => {
        return measurements.length;
      }
    );
    assert.strictEqual(selected_measurements, 2);
    console.log(`selected measurements length "${selected_measurements}" `);

    await page.waitForSelector(
      "shadowDom/epiviz-measurement-browser|paper-dialog paper-button"
    );
    const close_button = await page.$eval(
      "shadowDom/epiviz-measurement-browser|paper-dialog paper-button",
      (button) => {
        button.click();

        console.log("button", button);
        return button.textContent.trim();
      }
    );
    console.log(`close button "${close_button}" `);

    await page.waitForSelector(
      "shadowDom/epiviz-measurement-browser|paper-button"
    );
    const opend_dialog_button = await page.$eval(
      "shadowDom/epiviz-measurement-browser|paper-button ",
      (button) => {
        button.click();
        return button.textContent.trim();
      }
    );
    console.log(`button "${opend_dialog_button}" clicked`);

    await page.waitForSelector(
      "shadowDom/#measurement > epiviz-measurement-browser|#cardElem|#selectedContainer > div:nth-child(2)"
    );
    const label_text = await page.$eval(
      "shadowDom/#measurement > epiviz-measurement-browser|#cardElem|#selectedContainer > div:nth-child(2)",
      (label) => {
        return label.innerText;
      }
    );
    chai.assert.equalIgnoreCase(
      label_text,
      "No measurements selected",
      "selected items container sn't empty"
    );
    return page;
  });

  it("measurement according to project/collection/chart", async () => {
    await page.waitForSelector(
      "shadowDom/epiviz-measurement-browser|paper-button"
    );
    const { button_text, visibility } = await page.$eval(
      "shadowDom/epiviz-measurement-browser|paper-button ",
      (button) => {
        button.click();
        return {
          button_text: button.textContent.trim(),
          visibility: button.getComputedStyleValue("visibility"),
        };
      }
    );
    console.log(
      `button "${button_text}" with visibility "${visibility}" clicked`
    );
    assert.equal(visibility, "visible");

    await page.waitForSelector(
      "shadowDom/#measurement > epiviz-measurement-browser|#cardElem|#cardContainer > paper-card"
    );
    const measuremnt_data = await page.$$eval(
      "shadowDom/#measurement > epiviz-measurement-browser|#cardElem@#cardContainer > paper-card",
      (measurements) => {
        const first_measurement_text = measurements[0].querySelector(
          ".header-card"
        ).innerText;
        const project_name = document
          .querySelector("#measurement > epiviz-measurement-browser")
          .shadowRoot.querySelector("#collectionProject")
          .shadowRoot.querySelector("#menuButton > div > paper-input")
          .shadowRoot.querySelector("#input-1 > input[type=text]").value;
        const collection_name = document
          .querySelector("#measurement > epiviz-measurement-browser")
          .shadowRoot.querySelector("#collectionElement")
          .shadowRoot.querySelector("#menuButton > div > paper-input")
          .shadowRoot.querySelector("#input-2 > input[type=text]").value;
        const chart_type = document
          .querySelector("#measurement > epiviz-measurement-browser")
          .shadowRoot.querySelector(
            "#modal > div.header > div:nth-child(3) > paper-dropdown-menu"
          )
          .shadowRoot.querySelector("#menuButton > div > paper-input")
          .shadowRoot.querySelector("#input-3 > input[type=text]").value;
        return {
          amount: measurements.length,
          first_measurement_text,
          project_name,
          collection_name,
          chart_type,
        };
      }
    );
    assert.strictEqual(measuremnt_data.amount > 1, true);
    chai.assert.equalIgnoreCase(
      "LHX2 enhancers",
      measuremnt_data.first_measurement_text
    );
    chai.assert.equalIgnoreCase(
      "Microglia epigenetic data from Nott et al.",
      measuremnt_data.project_name
    );
    chai.assert.equalIgnoreCase(
      "Microglia epigenetic data from Nott et al.",
      measuremnt_data.collection_name
    );
    chai.assert.equalIgnoreCase(
      "StackedBlocksTrack",
      measuremnt_data.chart_type
      
    );
  });

  it("initialize m-browser with project and collection, we expect the chart type to be automatically selected based on the measurements", async () => {
    await page.waitForSelector(
      "shadowDom/epiviz-measurement-browser|paper-button"
    );
    const { button_text, visibility } = await page.$eval(
      "shadowDom/epiviz-measurement-browser|paper-button ",
      (button) => {
        button.click();
        return {
          button_text: button.textContent.trim(),
          visibility: button.getComputedStyleValue("visibility"),
        };
      }
    );
    console.log(
      `button "${button_text}" with visibility "${visibility}" clicked`
    );
    chai.assert.equalIgnoreCase("add chart", button_text);

    {
      await page.waitForSelector(
        "shadowDom/#measurement > epiviz-measurement-browser|#cardElem|#cardContainer > paper-card"
      );
      const measuremnt_data = await page.$$eval(
        "shadowDom/#measurement > epiviz-measurement-browser|#cardElem@#cardContainer > paper-card",
        (measurements) => {
          const first_measurement_text = measurements[0].querySelector(
            ".header-card"
          ).innerText;
          const project_name = document
            .querySelector("#measurement > epiviz-measurement-browser")
            .shadowRoot.querySelector("#collectionProject")
            .shadowRoot.querySelector("#menuButton > div > paper-input")
            .shadowRoot.querySelector("#input-1 > input[type=text]").value;
          const collection_name = document
            .querySelector("#measurement > epiviz-measurement-browser")
            .shadowRoot.querySelector("#collectionElement")
            .shadowRoot.querySelector("#menuButton > div > paper-input")
            .shadowRoot.querySelector("#input-2 > input[type=text]").value;
          const chart_type = document
            .querySelector("#measurement > epiviz-measurement-browser")
            .shadowRoot.querySelector(
              "#modal > div.header > div:nth-child(3) > paper-dropdown-menu"
            )
            .shadowRoot.querySelector("#menuButton > div > paper-input")
            .shadowRoot.querySelector("#input-3 > input[type=text]").value;
          return {
            amount: measurements.length,
            first_measurement_text,
            project_name,
            collection_name,
            chart_type,
          };
        }
      );
      assert.strictEqual(measuremnt_data.amount > 1, true);
      chai.assert.equalIgnoreCase(
        "LHX2 enhancers",
        measuremnt_data.first_measurement_text,
        "measurement"
      );
      chai.assert.equalIgnoreCase(
        "Microglia epigenetic data from Nott et al.",
        measuremnt_data.project_name,
        "project"
      );
      chai.assert.equalIgnoreCase(
        "Microglia epigenetic data from Nott et al.",
        measuremnt_data.collection_name,
        "collection"
      );
      chai.assert.equalIgnoreCase(
        "StackedBlocksTrack",
        measuremnt_data.chart_type,
        "chart type"
      );
    }

    // select project
    await page.waitForSelector(
      "shadowDom/epiviz-measurement-browser|#collectionProject|#menuButton > div > paper-input"
    );
    await page.$eval(
      "shadowDom/epiviz-measurement-browser|#collectionProject|#menuButton > div > paper-input",
      (project_selection) => project_selection.click()
    );

    await page.waitForSelector(
      "shadowDom/epiviz-measurement-browser|#collectionProject > paper-listbox > paper-item"
    );
    await page.$$eval(
      "shadowDom/epiviz-measurement-browser@#collectionProject > paper-listbox > paper-item",
      (projects) => projects[1].click()
    );

    await page.waitForTimeout(1000); //todo replace after implementing "loading spinner"
    await page.waitForSelector(
      "shadowDom/#measurement > epiviz-measurement-browser|#cardElem|#cardContainer > paper-card"
    );
    const measuremnt_data = await page.$$eval(
      "shadowDom/#measurement > epiviz-measurement-browser|#cardElem@#cardContainer > paper-card",
      (measurements) => {
        const first_measurement_text = measurements[0].querySelector(
          ".header-card"
        ).innerText;
        const project_name = document
          .querySelector("#measurement > epiviz-measurement-browser")
          .shadowRoot.querySelector("#collectionProject")
          .shadowRoot.querySelector("#menuButton > div > paper-input")
          .shadowRoot.querySelector("#input-1 > input[type=text]").value;
        const collection_name = document
          .querySelector("#measurement > epiviz-measurement-browser")
          .shadowRoot.querySelector("#collectionElement")
          .shadowRoot.querySelector("#menuButton > div > paper-input")
          .shadowRoot.querySelector("#input-2 > input[type=text]").value;
        const chart_type = document
          .querySelector("#measurement > epiviz-measurement-browser")
          .shadowRoot.querySelector(
            "#modal > div.header > div:nth-child(3) > paper-dropdown-menu"
          )
          .shadowRoot.querySelector("#menuButton > div > paper-input")
          .shadowRoot.querySelector("#input-3 > input[type=text]").value;
        return {
          amount: measurements.length,
          first_measurement_text,
          project_name,
          collection_name,
          chart_type,
        };
      }
    );
    assert.strictEqual(measuremnt_data.amount > 1, true);
    chai.assert.equalIgnoreCase(
      "Brain tracks from epigenome roadmap",
      measuremnt_data.project_name,
      "project after"
    );
    chai.assert.equalIgnoreCase(
      "Brain tracks from epigenome roadmap",
      measuremnt_data.collection_name,
      "collection after"
    );
    chai.assert.equalIgnoreCase(
      "MultiStackedLineTrack",
      measuremnt_data.chart_type,
      "chart type after"
    );
    chai.assert.equalIgnoreCase(
      "Neurosphere_Cultured_Cells_Cortex_Derived H3K4me3",
      measuremnt_data.first_measurement_text,
      "measurement after"
    );
  });
  // it('test blank', async () => {
  // });
  */
});
