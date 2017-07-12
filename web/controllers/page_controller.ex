defmodule TypescriptReactPhoenix.PageController do
  use TypescriptReactPhoenix.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
