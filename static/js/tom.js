function load_papers() {

  var papers = [

    // VAE Background
    {
      'tag':'Kingma14',
      'href':'https://arxiv.org/abs/1312.6114v10',
      'title':'Auto-Encoding Variational Bayes',
      'authors':'Diederik Kingma, Max Welling',
      'citation':'ICLR 2014',
      'notes': []
    },
    {
      'tag':'Rezende14',
      'href':'https://arxiv.org/abs/1401.4082v3',
      'title':'Stochastic Backpropagation and Approximate Inference in Deep Generative Models',
      'authors':'Danilo J. Rezende, Shair Mohamed, Daan Wierstra',
      'citation':'ICML 2014',
      'notes': []
    },
    // VAE document modeling and classification
    // theres gotta be one that uses VAE for semi-sup doc classification

    // VAE better text generation
    {
      'tag':'Miao16a',
      'href':'http://proceedings.mlr.press/v48/miao16.html',
      'title':'Neural Variational Inference for Text Processing',
      'authors':'Yishu Miao, Lei Yu, Phil Blunsom',
      'citation':'ICML 2016',
      'notes': []
    },
    {
      'tag':'Bowman16',
      'href':'http://arxiv.org/abs/1511.06349',
      'title':'Generating Sentences from Continuous Space',
      'authors':'Samuel R. Bowman, Luke Vilnis, Oriol Vinyals, Andrew M. Dai, Rafal Jozefowicz, Samy Bengio',
      'citation':'CoNLL 2016',
      'notes': []
    },
    {
      'tag':'Guu18',
      'href':'https://doi.org/10.1162/tacl_a_00030',
      'title':'Generating Sentences by Editing Prototypes',
      'authors':'Kelvin Guu, Tatsunori B. Hashimoto, Yonatan Oren, Percy Liang',
      'citation':'TACL Volume 6, 2018, p.437-450',
      'notes': []
    },

    // Posterior Collapse
    {
      'tag':'Xu18',
      'href':'http://arxiv.org/abs/1808.10805',
      'title':'Spherical Latent Spaces for Stable Variational Autoencoders',
      'authors':'Jiacheng Xu, Greg Durrett',
      'citation':'EMNLP 2018',
      'notes': []
    },
    {
      'tag':'Kim18',
      'href':'http://arxiv.org/pdf/1802.02550.pdf',
      'title':'Semi-Amortized Variational Autoencoders',
      'authors':'Yoon Kim, Sam Wiseman, Andrew C. Miller, David Sontag, Alexander M. Rush',
      'citation':'ICML 2018',
      'notes': []
    },
    {
      'tag':'He19',
      'href':'http://arxiv.org/abs/1901.05534',
      'title':'Lagging Inference Networks and Posterior Collapse in Variational Autoencoders',
      'authors':'Junxian He, Daniel Spokoyny, Graham Neubig',
      'citation':'ICLR 2019',
      'notes': []
    },
    // Adjis paper on using skip connections

    // Discrete Latent Structure
    {
      'tag':'Srivastava17',
      'href':'http://arxiv.org/abs/1703.01488',
      'title':'Autoencoding Variational Inference For Topic Models',
      'authors':'Akash Srivastava, Charles Sutton',
      'citation':'ICLR 2017',
      'notes': []
    },
    {
      'tag':'Miao17a',
      'href':'http://arxiv.org/abs/1706.00359',
      'title':'Discovering Discrete Latent Topics with Neural Variational Inference',
      'authors':'Yishu Miao, Edward Grefenstette, Phil Blunsom',
      'citation':'ICML 2017',
      'notes': []
    },
    {
      'tag':'Miao17b',
      'href':'http://dl.acm.org/citation.cfm?id=3305890.3306067',
      'title':'Latent Intention Dialogue Models',
      'authors':'Tsung-Hsien Wen, Yishu Miao, Phil Blunsom',
      'citation':'ICML 2017',
      'notes': []
    },
    {
      'tag':'Yang17',
      'href':'https://arxiv.org/abs/1702.08139v2',
      'title':'Improved Variational Autoencoders for Text Modeling using Dilated Convolutions',
      'authors':'Zichao Yang, Zhiting Hu, Rusian Salakhudinov, Taylor Berg-Kirkpatrick',
      'citation':'ICML 2017',
      'notes': []
    },

    //// Structured Inference
    // Exact Inference
    {
      'tag':'Lample16',
      'href':'https://arxiv.org/abs/1603.01360',
      'title':'Neural Architectures for Named Entity Recognition',
      'authors':'Guillaume Lample, Miguel Ballesteros, Sandeep Subramanian, Kazuya Kawakami, Chris Dyer',
      'citation':'NAACL 2016',
      'notes': []
    },
    {
      'tag':'Greenberg18',
      'href':'https://aclweb.org/anthology/papers/D/D18/D18-1306/',
      'title':'Marginal Likelihood Training of BiLSTM-CRF for Biomedical Named Entity Recognition from Disjoint Label Sets',
      'authors':'Nathan Greenberf, Trapit Bansal, Patrick Verga, Andrew McCallum',
      'citation':'EMNLP 2018',
      'notes': []
    },
    {
      'tag':'Durrett15',
      'href':'http://arxiv.org/abs/1507.03641',
      'title':'Neural CRF Parsing',
      'authors':'Greg Durrett, Dan Klein',
      'citation':'ACL 2015',
      'notes': []
    },
    {
      'tag':'Kitaev18',
      'href':'http://arxiv.org/abs/1805.01052',
      'title':'Constituency Parsing with a Self-Attentive Encoder',
      'authors':'Nikita Kitaev, Dan Klein',
      'citation':'ACL 2018',
      'notes': []
    },


    // Approximation-Aware Training
    {
      'tag':'Gormley15',
      'href':'http://arxiv.org/abs/1508.02375',
      'title':'Approximation-Aware Dependency Parsing by Belief Propagation',
      'authors':'Matthew R. Gormley, Mark Dredze, Jason Eisner',
      'citation':'TACL 2015',
      'notes': []
    },
    {
      'tag':'Ganea17',
      'href':'http://arxiv.org/abs/1704.04920',
      'title':'Deep Joint Entity Disambiguation with Local Neural Attention',
      'authors':'Octavian-Eugen Ganea, Thomas Hofmann',
      'citation':'EMNLP 2017',
      'notes': []
    },
    {
      'tag':'Andor16',
      'href':'http://arxiv.org/abs/1603.06042',
      'title':'Globally Normalized Transition-Based Neural Networks',
      'authors':'Daniel Andor, Chris ALberti, David Weiss, Aliaksei Severyn, Alessandro Presta, Kuzman Ganchev, Slav Petrov, Michael Collins',
      'citation':'ACL 2016',
      'notes': []
    },


    // Semi-supervised Learning for structured models
    {
      'tag':'Miao16b',
      'href':'http://arxiv.org/abs/1609.07317',
      'title':'Language as a Latent Variable: Discrete Generative Models for Sentence Compression',
      'authors':'Yishu Miao, Phil Blunsom',
      'citation':'EMNLP 2016',
      'notes': []
    },
    {
      'tag':'Zhang17',
      'href':'http://aclweb.org/anthology/D17-1179',
      'title':'Semi-supervised Structured Prediction with Neural CRF Autoencoder',
      'authors':'Xiao Zhang, Yong Jiang, Hao Peng, Kewei Tu, Dan Goldwasser',
      'citation':'ACL 2017',
      'notes': []
    },
    {
      'tag':'Yin18',
      'href':'http://arxiv.org/abs/1808.10805',
      'title':'StructVAE: Tree-structured Latent Variable Models for Semi-supervised Semantic Parsing',
      'authors':'Pengcheng Yin, Chunting Zhou, Junxian He, Graham Neubig',
      'citation':'ACL 2018',
      'notes': []
    },
    {
      'tag':'Caio19',
      'href':'http://arxiv.org/abs/1807.09875',
      'title':'Differentiable Pertub-and-Parse: Semi-Supervised Parsing with a Structured Variational Autoencoder',
      'authors':'Caio Corro, Ivan Titov',
      'citation':'ICLR 2019',
      'notes': []
    },

    // Attention
    // ?Gumble softmax / Concrete
    {
      'tag':'Lei16',
      'href':'http://arxiv.org/abs/1804.10637',
      'title':'Rationalizing Neural Predictions',
      'authors':'Tao Lei, Regina Barzilay, Tommi Jaakola',
      'citation':'EMNLP 2016',
      'notes': []
    },
    {
      'tag':'Deng18',
      'href':'http://papers.nips.cc/paper/8179-latent-alignment-and-variational-attention.pdf',
      'title':'Latent Alignment and Variational Attention',
      'authors':'Yuntian Deng, Yoon Kim, Justin Chiu, Demi Guo, Alexander Rush',
      'citation':'NeurIPS 2018',
      'notes': []
    },
    {
      'tag':'Le18',
      'href':'http://arxiv.org/abs/1804.10637',
      'title':'Improving Entity Linking by Modeling Latent Relations between Mentions',
      'authors':'Phong Le, Ivan Titov',
      'citation':'ACL 2018',
      'notes': []
    },
    {
      'tag':'Kim17',
      'href':'https://arxiv.org/abs/1702.00887',
      'title':'Structured Attention Networks',
      'authors':'Yoon Kim, Carl Denton, Luong Hoang, Alexander M. Rush',
      'citation':'ICLR 2017',
      'notes': []
    },
    {
      'tag':'Strubell18',
      'href':'https://arxiv.org/abs/1804.08199',
      'title':'Linguistically-Informed Self-Attention for Semantic Role Labeling',
      'authors':'Emma Strubell, Patrick Verga, Daniel Andor, David Weiss, Andrew McCallum',
      'citation':'EMNLP 2018',
      'notes': []
    },

  ];

  papers.map(function(paper, i){
    var element = document.getElementById(paper.tag)
    if (element) {
      element.innerHTML = `(${i+1}) <a href="${paper.href}"><tag id="p_title">${paper.title}</tag></a><br><tag id="p_auth">${paper.authors}</tag><br>${paper.citation}<br><br>`
    }
  })

	//METHODOLOGY

	//Background
	// document.getElementById('Blei1').innerHTML = '<a href="https://arxiv.org/pdf/1601.00670.pdf">\
	// <tag id=\'p_title\'>Variational inference: A review for statisticians.</tag>\
	// (‎J. Am. Stat. Assoc 2017)<br>\
	// <tag id=\'p_auth\'>David M Blei, Alp Kucukelbir, Jon D. McAuliffe</tag>\
	// </a><br><br>';
  //
	// // Gradability
	// document.getElementById('DeMelo2013').innerHTML = '<a href="http://ttic.uchicago.edu/~mbansal/papers/tacl_acl13_semanticIntensity.pdf">\
	// <tag id=\'p_title\'>Good, Great, Excellent: Global Inference of Semantic Intensities</tag>\
	// (ACL 2013)<br>\
	// <tag id=\'p_auth\'>Gerard de Melo, Mohit Bansal</tag>\
	// </a><br><br>';
  //
	// document.getElementById('Lassiter').innerHTML = '<a href="http://web.stanford.edu/~danlass/Lassiter-Goodman-adjectival-vagueness-Synthese.pdf">\
	// <tag id=\'p_title\'>Adjectival vagueness in a Bayesian model of interpretation</tag>\
	// (SALT 2015)<br>\
	// <tag id=\'p_auth\'>Daniel Lassiter, Noah D. Goodman</tag>\
	// </a><br><br>';
  //
	// document.getElementById('Qing').innerHTML = '<a href="Qing2014.pdf">\
	// <tag id=\'p_title\'>Gradable adjectives, vagueness, and optimal language use: A speaker-oriented model</tag>\
	// (SALT 2014)<br>\
	// <tag id=\'p_auth\'>Ciyang Qing, Michael Franke</tag>\
	// </a><br><br>';
  //
	// //Comparatives
	// document.getElementById('Mcmahan').innerHTML = '<a href="https://aclweb.org/anthology/Q/Q15/Q15-1008.pdf">\
	// <tag id=\'p_title\'>A Bayesian Model of Grounded Color Semantics.</tag>\
	// (TACL 2015)<br>\
	// <tag id=\'p_auth\'>Brian McMahan, Matthew Stone</tag>\
	// </a><br><br>';
  //
	// document.getElementById('Monroe2017b').innerHTML = '<a href="http://www.aclweb.org/anthology/Q17-1023">\
	// <tag id=\'p_title\'>Colors in Context: A Pragmatic Neural Model for Grounded Language Understanding</tag>\
	// (TACL 2017)<br>\
	// <tag id=\'p_auth\'>Will Monroe, Richard X.D. Hawkins, Noah D. Goodman, Christopher Potts</tag>\
	// </a><br><br>';
  //
	// document.getElementById('Bagherinezhad').innerHTML = '<a href="https://homes.cs.washington.edu/~yejin/Papers/aaai16_elephant.pdf">\
	// <tag id=\'p_title\'>Are Elephants Bigger than Butterflies? Reasoning about Sizes of Objects</tag>\
	// (AAAI 2016)<br>\
	// <tag id=\'p_auth\'>Hessam Bagherinezhad, Hannaneh Hajishirzi, Yejin Choi, Ali Farhadi</tag>\
	// </a><br><br>';
  //
	// //Quantifiers & vagueness
	// document.getElementById('Herbelot').innerHTML = '<a href="http://www.emnlp2015.org/proceedings/EMNLP/pdf/EMNLP003.pdf">\
	// <tag id=\'p_title\'>Building a Shared World: Mapping Distributional to Model-Theoretic Semantic Spaces</tag>\
	// (ACL 215)<br>\
	// <tag id=\'p_auth\'>Aurelie Herbelot, Eva Maria Vecchi</tag>\
	// </a><br><br>';
  //
	// document.getElementById('Sorodoc').innerHTML = '<a href="http://aclweb.org/anthology/W16-3211">\
	// <tag id=\'p_title\'>&quot;Look, some green circles?&quot;: Learning to quantify from images</tag>\
	// (ACL 2016)<br>\
	// <tag id=\'p_auth\'>Ionut Sorodoc, Angeliki Lazaridou, Gemma Boleda, Aurelie Herbelot, Sandro Pezzelle, Rafaella Bernardi</tag>\
	// </a><br><br>';
  //
	// document.getElementById('Pezzelle').innerHTML = '<a href="https://pdfs.semanticscholar.org/a3c8/23b9dd4e0c03076f6016ef5d73c3caacb791.pdf">\
	// <tag id=\'p_title\'>Be Precise or Fuzzy: Learning the Meaning of Cardinals and Quantifiers from Vision</tag>\
	// (ACL 2017)<br>\
	// <tag id=\'p_auth\'>Sandro Pezzelle, Marco Marelli and Raffaella Bernardi</tag>\
	// </a><br><br>';
  //
	// //Compositional Methods
	// document.getElementById('Mitchell').innerHTML = '<a href="http://onlinelibrary.wiley.com/doi/10.1111/j.1551-6709.2010.01106.x/epdf">\
	// <tag id=\'p_title\'> Composition in Distributional Models of Semantics</tag>\
	// (Cognitive Science 2010)<br>\
	// <tag id=\'p_auth\'>Jeff Mitchell, Mirella Lapata</tag>\
	// </a><br><br>';
  //
	// document.getElementById('Baroni').innerHTML = '<a href="http://clic.cimec.unitn.it/marco/publications/bz-adj-com-emnlp10.pdf">\
	// <tag id=\'p_title\'>Nouns are vectors, adjectives are matrices: Representing adjective-noun constructions in semantic space</tag>\
	// (Com-ENLP 2010)<br>\
	// <tag id=\'p_auth\'>Marco Baroni, Roberto Zamparelli</tag>\
	// </a><br><br>';
  //
	// document.getElementById('Hartung2017').innerHTML = '<a href="Hartung2017.pdf">\
	// <tag id=\'p_title\'>Learning Compositionality Functions on Word Embeddings for\
	// Modelling Attribute Meaning in Adjective-Noun Phrases.</tag>\
	// (EACL 2017)<br>\
	// <tag id=\'p_auth\'>Matthias Hartung, Fabian Kaupmann, Soufian Jebbara, Philipp Cimiano</tag>\
	// </a><br><br>';
  //
	// document.getElementById('Boleda').innerHTML = '<a href="http://www.aclweb.org/anthology/W13-0104">\
	// <tag id=\'p_title\'>Intensionality was only alleged: On adjective-noun composition in distributional semantics</tag>\
	// (ACL 2013)<br>\
	// <tag id=\'p_auth\'>Gemma Boleda, Marco Baroni, The Nghia Pham, Louise McNally</tag>\
	// </a><br><br>';
  //
	// //Back to Adjectives
	// document.getElementById('Dunlop').innerHTML = '<a href="http://anthology.aclweb.org/N/N10/N10-1085.pdf">\
	// <tag id=\'p_title\'>Prenominal Modifier Ordering via Multiple Sequence Alignment</tag>\
	// (ACL 2010)<br>\
	// <tag id=\'p_auth\'>Aaron Dunlop, Margaret Mitchell, Brian Roark</tag>\
	// </a><br><br>';
  //
	// document.getElementById('Vecchi').innerHTML = '<a href="http://www.vecchi.com/eva/publications/210_Paper.pdf">\
	// <tag id=\'p_title\'>Studying the Recursive Behavior of Adjectival Modification with Compositional Distributional Semantics</tag>\
	// (EMNLP 2013)<br>\
	// <tag id=\'p_auth\'>Eva Maria Vecchi, Roberto Zamparelli, Marco Baroni</tag>\
	// </a><br><br>';
  //
	// //Text and Vision
	// document.getElementById('Shutova').innerHTML = '<a href="http://www.cl.cam.ac.uk/~es407/papers/NAACL2016.pdf">\
	// <tag id=\'p_title\'>Black Holes and White Rabbits: Metaphor Identification with Visual Features.</tag>\
	// (NACL: Human Language Technologies 2016)<br>\
	// <tag id=\'p_auth\'>Ekaterina Shutova, Douwe Kiela, Jean Maillard.</tag>\
	// </a><br><br>';
  //
	// document.getElementById('Lazaridou2015').innerHTML = '<a href="http://www.anthology.aclweb.org/Q/Q15/Q15-1014.pdf">\
	// <tag id=\'p_title\'>From Visual Attributes to Adjectives through Decompositional Distributional Semantics.</tag>\
	// (ACL 2015)<br>\
	// <tag id=\'p_auth\'>Angeliki Lazaridou, Georgiana Dinu, Adam Liska, Marco Baroni</tag>\
	// </a><br><br>';
  //
	// document.getElementById('Collell2016').innerHTML = '<a href="https://www.aclweb.org/anthology/C/C16/C16-1264.pdf">\
	// <tag id=\'p_title\'>Is an Image Worth More than a Thousand Words?\
	// On the Fine-Grain Semantic Differences between Visual and Linguistic Representations</tag>\
	// (COLING 2016)<br>\
	// <tag id=\'p_auth\'>Guillem Collell, Marie-Francine</tag>\
	// </a><br><br>';
  //
	// //Methodologies
	// document.getElementById('Blei').innerHTML = '<a href="https://people.eecs.berkeley.edu/~jordan/papers/annotated-data.pdf">\
	// <tag id=\'p_title\'>Modeling Annotated Data</tag>\
	// (SIGIR 2003)<br>\
	// <tag id=\'p_auth\'>David M. Blei, Michael I. Jordan</tag>\
	// </a><br><br>';
  //
	// document.getElementById('Feng').innerHTML = '<a href="http://www.aclweb.org/anthology/N10-1011">\
	// <tag id=\'p_title\'>Visual Information in Semantic Representation</tag>\
	// (ACL 2010)<br>\
	// <tag id=\'p_auth\'>Yansong Feng, Mirella Lapata</tag>\
	// </a><br><br>';
  //
	// document.getElementById('Roller').innerHTML = '<a href="http://anthology.aclweb.org/D/D13/D13-1115.pdf">\
	// <tag id=\'p_title\'>A Multimodal LDA Model Integrating Textual, Cognitive and Visual Modalities</tag>\
	// (EMNLP 2013)<br>\
	// <tag id=\'p_auth\'>Stephen Roller, Sabine Schulte im Walde</tag>\
	// </a><br><br>';
  //
	// document.getElementById('Lazaridou2016').innerHTML = '<a href="https://pdfs.semanticscholar.org/1ccf/5670461638542b32fc7bd86cd47bf2f9d050.pdf">\
	// <tag id=\'p_title\'>Combining Language and Vision with a Multimodal Skip-gram Model</tag>\
	// (NAACL 2016)<br>\
	// <tag id=\'p_auth\'>Angeliki Lazaridou, Nghia The Pham, Marco Baroni</tag>\
	// </a><br><br>';
  //
	// document.getElementById('Wang').innerHTML = '<a href="https://arxiv.org/pdf/1704.04550.pdf">\
	// <tag id=\'p_title\'>Distributional Modeling on a Diet: One-shot Word Learning from Text Only</tag>\
	// (ICJNLP 2017)<br>\
	// <tag id=\'p_auth\'>Su Wang, Steven Roller, Katrin Erk</tag>\
	// </a><br><br>';
  //
	// document.getElementById('Silberer').innerHTML = '<a href="http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.308.8576&rep=rep1&type=pdf">\
	// <tag id=\'p_title\'>Models of Semantic Representation with Visual Attributes</tag>\
	// (ACL 2013)<br>\
	// <tag id=\'p_auth\'>Carina Silberer, Vittorio Ferrari, Mirella Lapata</tag>\
	// </a><br><br>';
  //
	// //Attribute-based learning
	// document.getElementById('Hwang').innerHTML = '<a href="http://papers.nips.cc/paper/5289-a-unified-semantic-embedding-relating-taxonomies-and-attributes.pdf">\
	// <tag id=\'p_title\'>A Unified Semantic Embedding: Relating Taxonomies and Attributes</tag>\
	// (2014 NIPS)<br>\
	// <tag id=\'p_auth\'>Sung Ju Hwang, Leonid Sigal</tag>\
	// </a><br><br>';
  //
	// document.getElementById('Chen').innerHTML = '<a href="https://pdfs.semanticscholar.org/50d1/5cb17144344bb1879c0a5de7207471b9ff74.pdf">\
	// <tag id=\'p_title\'>Divide, Share and Conquer: Multi-Task Attribute Learning with Selective Sharing</tag>\
	// (from <i>Visual Attributes</i>, Springer 2017)<br>\
	// <tag id=\'p_auth\'>Chao-Yen Chen, Dinesh Jayaraman, Fei Sha, Kristen Grauman</tag>\
	// </a><br><br>';
  //
	// document.getElementById('Lazaridou2014').innerHTML = '<a href="http://www.aclweb.org/old_anthology/P/P14/P14-1132.pdf">\
	// <tag id=\'p_title\'>Is this a wampimuk? Cross-modal mapping between distributional semantics and the visual world</tag>\
	// (ACL 2014)<br>\
	// <tag id=\'p_auth\'>Angeliki Lazaridou, Elia Bruni, Marco Baroni</tag>\
	// </a><br><br>';
  //
	// document.getElementById('Vedantam').innerHTML = '<a href="https://arxiv.org/pdf/1705.10762.pdf">\
	// <tag id=\'p_title\'>Generative Models of Visually Grounded Imagination</tag>\
	// (arXiv 2017)<br>\
	// <tag id=\'p_auth\'>Ramakrishna Vedantam, Ian Fischer, Jonathan Huang, Kevin Murphy</tag>\
	// </a><br><br>';



	// document.getElementById('Erk').innerHTML = '<a href="http://semprag.org/article/view/sp.9.17/pdf">\
	// <tag id=\'p_title\'>What do you know about an alligator when you know the company it keeps?</tag>\
	// (Semantics &amp; Pragmatics 2016)<br>\
	// <tag id=\'p_auth\'>Katrin Erk</tag>\
	// </a><br><br>';

	// document.getElementById('').innerHTML = '<a href="">\
	// <tag id=\'p_title\'></tag>\
	// ()<br>\
	// <tag id=\'p_auth\'></tag>\
	// </a><br><br>';

}
