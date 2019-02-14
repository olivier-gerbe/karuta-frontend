if( UIFactory === undefined )
{
  var UIFactory = {};
}
	var displayHTML = {};
	
	displayHTML["core"]  = "<div id='node_#uuid#' class='#displaytype# #nodetype# #semtag# #cssclass#  #resourcetype# #priv#'></div>";

	//========================== BEGIN DO NOT EDIT ===========================	
	
	displayHTML["struct-basic"] =	"<div id='node_#uuid#' class='struct-basic #displaytype# #nodetype# #semtag# #cssclass#  #resourcetype# #priv#'>" +
									"	<div id='sub_node_#uuid#' name='lbl-div' class='row  #displayview#' >" +
									"		<div id='collapsible_#uuid#' class='col-md-1'>&nbsp;</div>" +
									"		<div id='std_node_#uuid#' class='node-label col-md-7  '>" +
									"			<div><a id='label_node_#uuid#' class='label-libelle'></a><span id='help_#uuid' class='ihelp'></span></div>" +
									"			<div id='comments_#uuid#' class='comments'></div><!-- comments -->" +
									"			<div id='metainfo_#uuid#' class='metainfo'></div><!-- metainfo -->" +
									"		</div>" +
									"		<div class='col-md-4'><span id='buttons-#uuid#' class='buttons'></span><span id='menus-#uuid#' class='menus'><span></div>" +
									"	</div>" +
									"</div>";

	displayHTML["node-basic"] =	"<div id='node_#uuid#' class='node-basic #displaytype# #nodetype# #semtag# #cssclass#  #resourcetype# #priv#'>" +
								" <div id='sub_node_#uuid#' name='lbl-div' class='node row' >" +
								"	<div id='collapsible_#uuid#' class='collapsible col-md-1'>&nbsp;</div>" +
								"	<div id='std_node_#uuid#' class='node-label col-md-7'>" +
								"		<div><span id='label_node_#uuid#'></span><span id='help_#uuid' class='ihelp'></span></div>" +
								"		<div id='comments_#uuid#' class='comments'></div>" +
								"		<div id='metainfo_#uuid#' class='metainfo'></div>" +
								"	</div>" +
								"	<div class='col-md-4'><span id='buttons-#uuid#' class='buttons'></span><span id='menus-#uuid#' class='menus'><span></div>" +
								" </div>" +
								" <div id='content-#uuid#' name='cnt-div' class='content row' ><\div>" +
								"</div>";

	displayHTML["resource-basic"] =	"<div id='node_#uuid#' class=' resource-basic #displaytype# #nodetype# #semtag# #cssclass#  #resourcetype# #priv#'>" +
									"	<div id='sub_node_#uuid#' class='resource-node row' >" +
									"		<div id='std_node_#uuid#' name='lbl-div' class='col-md-offset-1 col-md-2 node-label inside-full-height'>" +
									"			<div><span id='label_node_#uuid#' class='label-libelle'></span><span id='help_#uuid' class='ihelp'></span></div>" +
									"		</div>" +
									"		<div name='res-div' class='col-md-5'>" +
									"					<div id='resource_#uuid#' class='resource'></div>" +
									"					<div id='comments_#uuid#' class='comments'></div>" +
									"		</div>" +
									"		<div class='col-md-4'><span id='buttons-#uuid#' class='buttons'></span><span id='menus-#uuid#' class='menus'><span></div>" +
									"	</div><!-- row -->" +
									"	<div class='row'><div id='metainfo_#uuid#' class='col-md-offset-1 col-md-10 metainfo'></div></div>" +
									"	<div id='extra_#uuid#' class='extra'></div>" +
									"</div>";

	//========================== END DO NOT EDIT ===========================	

	displayHTML["struct-standard"] =	"<div id='node_#uuid#' class='struct-standard #displaytype# #nodetype# #semtag# #cssclass#  #resourcetype# #priv#'>" +
										"<div id='sub_node_#uuid#' name='lbl-div' class='row  #displayview#' >" +
										"	<div id='collapsible_#uuid#' class='col-md-1'>&nbsp;</div>" +
										"	<div id='std_node_#uuid#' class='node-label col-md-7  '>" +
										"		<div><a id='label_node_#uuid#' class='label-libelle'></a><span id='help_#uuid' class='ihelp'></span></div>" +
										"		<div id='comments_#uuid#' class='comments'></div><!-- comments -->" +
										"		<div id='metainfo_#uuid#' class='metainfo'></div><!-- metainfo -->" +
										"	</div><!-- col-md-7 -->" +
										"	<div class='col-md-4'><span id='buttons-#uuid#' class='buttons'></span><span id='menus-#uuid#' class='menus'><span></div><!-- col-md-4  -->" +
										"</div><!-- row -->" +
										"</div>";

	displayHTML["node-standard"] =	"<div id='node_#uuid#' class='node-standard #displaytype# #nodetype# #semtag# #cssclass#  #resourcetype# #priv#'>" +
									" <div id='sub_node_#uuid#' name='lbl-div' class='node row' >" +
									"	<div id='collapsible_#uuid#' class='collapsible col-md-1'>&nbsp;</div>" +
									"	<div id='std_node_#uuid#' class='node-label col-md-7'>" +
									"		<div><span id='label_node_#uuid#'></span><span id='help_#uuid' class='ihelp'></span></div>" +
									"		<div id='comments_#uuid#' class='comments'></div>" +
									"		<div id='metainfo_#uuid#' class='metainfo'></div>" +
									"	</div>" +
									"	<div class='col-md-4'><span id='buttons-#uuid#' class='buttons'></span><span id='menus-#uuid#' class='menus'><span></div>" +
									" </div>" +
									" <div id='content-#uuid#' name='cnt-div' class='content row' ><\div>" +
									"</div>";

	displayHTML["resource-standard"] =	"<div id='node_#uuid#' class='resource-standard #displaytype# #nodetype# #semtag# #cssclass#  #resourcetype# #priv#'>" +
										"	<div id='sub_node_#uuid#' class='resource-node row' >" +
										"		<div id='std_node_#uuid#' name='lbl-div' class='col-md-offset-1 col-md-2 node-label inside-full-height'>" +
										"			<div><span id='label_node_#uuid#' class='label-libelle'></span><span id='help_#uuid' class='ihelp'></span></div>" +
										"		</div>" +
										"		<div name='res-div' class='col-md-8'>" +
										"			<table width='100%'><tr>" +
									"					<td  width='80%' class='td-resource'>" +
										"					<div id='resource_#uuid#' class='resource inside-full'></div>" +
										"					<div id='comments_#uuid#' class='comments'></div>" +
										"				</td>" +
										"				<td class='td-buttons buttons'><span id='buttons-#uuid#'></span><span id='menus-#uuid#' class='menus'><span></td>" +
										"			</tr></table>" +
										"		</div><!-- col-md-8 -->" +
										"	</div><!-- row -->" +
										"	<div class='row'><div id='metainfo_#uuid#' class='col-md-offset-1 col-md-10 metainfo'></div></div>" +
										"	<div id='extra_#uuid#' class='extra'></div>" +
										"</div>";

	//====================================================================

	displayHTML["node-xlarge"]  =	"<div id='node_#uuid#' class='#displaytype# #nodetype# #semtag# #cssclass#  #resourcetype# #priv#'>" +
									" <div id='sub_node_#uuid#' name='lbl-div' class='node #displayview#' >" +
									"	<div id='collapsible_#uuid#' class='collapsible'>&nbsp;</div>" +
									"	<div id='std_node_#uuid#' class='node-label'>" +
									"		<div><span id='label_node_#uuid#'></span><span id='help_#uuid' class='ihelp'></span></div>" +
									"		<div id='comments_#uuid#' class='comments'></div>" +
									"		<div id='metainfo_#uuid#' class='metainfo'></div>" +
									"	</div>" +
									"	<div><span id='buttons-#uuid#' class='buttons'></span><span id='menus-#uuid#' class='menus'><span></div>" +
									" </div>" +
									" <div id='content-#uuid#' name='cnt-div' class='content row' ><\div>" +
									"</div>";

	displayHTML["resource-xlarge"]  =	"<div id='node_#uuid#' class='#displaytype# #nodetype# #semtag# #cssclass#  #resourcetype# #priv#'>" +
									" <div id='sub_node_#uuid#' class='resource-node #displayview#' >" +
									"	<div id='std_node_#uuid#' name='lbl-div' class='row'>" +
									"		<div class='col-md-offset-1 col-md-7 node-label inside-full-height'>" +
									 "			<div><span id='label_node_#uuid#' class='label-libelle'></span><span id='help_#uuid' class='ihelp'></span></div>" +
									 "		</div>" +
									 "		<div id='buttons-#uuid#' class='buttons col-md-4'></div>" +
									 "	</div>" +
									 "	<div name='res-div'>" +
									 "		<div id='resource_#uuid#' class='resource'></div>" +
									 "		<div id='comments_#uuid#' class='comments'></div>" +
									 "	</div>" +
									 "</div>" +
									 "<div id='metainfo_#uuid#' class='metainfo'></div>" +
									 "<div id='extra_#uuid#'  class='extra-xlarge'></div>" +
									 "</div>";
	//====================================================================
	displayHTML["node-model"] =	"<div id='node_#uuid#' class='node-model #displaytype# #nodetype# #semtag# #cssclass#  #resourcetype#'>" +
								" <div id='sub_node_#uuid#' name='lbl-div' class='node-model' >" +
								"	<div id='collapsible_#uuid#' class='collapsible'>&nbsp;</div>" +
								"	<div id='std_node_#uuid#' class='node-label'>" +
								"		<span id='menus-#uuid#' class='menus'/><span id='buttons-#uuid#' class='buttons'/>" +
								"		<div><span id='label_node_#uuid#'></span><span id='help_#uuid' class='ihelp'></span></div>" +
								"		<div id='comments_#uuid#' class='comments'></div>" +
								"		<div id='metainfo_#uuid#' class='metainfo'></div>" +
								"	</div>" +
								" </div>" +
								" <div id='content-#uuid#' name='cnt-div' class='content row' ><\div>" +
								"</div>";

	displayHTML["resource-model"] = 	"<div id='node_#uuid#' class='resource-model #displaytype# #nodetype# #semtag# #cssclass#  #resourcetype#'>" +
										"	<div id='sub_node_#uuid#' class='row' >" +
										"		<div id='std_node_#uuid#'  name='label-div'class='col-md-offset-1 col-md-2 node-label inside-full-height'>" +
										"			<div><span id='label_node_#uuid#'></span><span id='help_#uuid' class='ihelp'></span></div>" +
										"		</div>" +
										"		<div class='col-md-8'>" +
										"			<table width='100%'><tr>" +
										"				<td  width='80%' class='resource'>" +
										"					<div id='resource_#uuid#' class='resource inside-full-height'></div>" +
										"					<div id='comments_#uuid#' class='comments'></div><!-- comments -->" +
										"				</td>" +
										"				<td class='td-buttons buttons'><span id='menus-#uuid#' class='menus'/><span id='buttons-#uuid#'/></td>" +
										"			</tr></table>" +
										"		</div><!-- col-md-8 -->" +
										"	</div>" +
										"	<div class='row'><div id='metainfo_#uuid#' class='col-md-offset-1 col-md-10 metainfo'></div><!-- metainfo --></div>" +
										"</div>";

	//====================================================================

	var node1 = "<div id='node_#uuid#' class='#displaytype# #nodetype# #semtag# #cssclass#  #resourcetype# #priv# col-md-";
	var node2 = " ' >" +
					"<div id='sub_node_#uuid#' name='lbl-div' class='node #displayview#' >" +
					"	<div id='collapsible_#uuid#' class='collapsible'>&nbsp;</div>" +
					"	<div id='std_node_#uuid#' class='node-label'>" +
					"		<div><span id='label_node_#uuid#'></span><span id='help_#uuid' class='ihelp'></span></div>" +
					"		<div id='comments_#uuid#' class='comments'></div>" +
					"		<div id='metainfo_#uuid#' class='metainfo'></div>" +
					"	</div>" +
					"	<div><span id='buttons-#uuid#' class='buttons'></span><span id='menus-#uuid#' class='menus'><span></div>" +
					"</div>" +
					"<div id='content-#uuid#' name='cnt-div' class='content' ></div>" +
					"</div>";

	displayHTML["node-1/12"]  =	node1 + "1" + node2;
	displayHTML["node-2/12"]  =	node1 + "2" + node2;
	displayHTML["node-3/12"]  =	node1 + "3" + node2;
	displayHTML["node-4/12"]  =	node1 + "4" + node2;
	displayHTML["node-5/12"]  =	node1 + "5" + node2;
	displayHTML["node-6/12"]  =	node1 + "6" + node2;
	
	var resource1 = "<div id='node_#uuid#' class='#displaytype# #nodetype# #semtag# #cssclass#  #resourcetype# #priv# col-md-";
	var resource2 = " ' >" +
					"<div id='sub_node_#uuid#' class='node #displayview#' >" +
					"	<div id='std_node_#uuid#' class='node-label'>" +
					"		<div name='lbl-div'><span id='label_node_#uuid#' class='label-libelle'></span><span id='help_#uuid' class='ihelp'></span></div>" +
					"		<div id='resource_#uuid#' name='res-div' class='resource'></div>" +
					"	</div>" +
					"	<div id='buttons-#uuid#' name='res-div' class='buttons'></div>" +
					"</div>" +
					"</div>";

	displayHTML["resource-1/12"]  =	resource1 + "1" + resource2;
	displayHTML["resource-2/12"]  =	resource1 + "2" + resource2;
	displayHTML["resource-3/12"]  =	resource1 + "3" + resource2;
	displayHTML["resource-4/12"]  =	resource1 + "4" + resource2;
	displayHTML["resource-5/12"]  =	resource1 + "5" + resource2;
	displayHTML["resource-6/12"]  =	resource1 + "6" + resource2;

