class RenameExternalDomainAllowlistToExternalDomainWhitelist < ActiveRecord::Migration[6.1]
  def change
    rename_column :decidim_organizations, :external_domain_allowlist, :external_domain_whitelist
  end
end
