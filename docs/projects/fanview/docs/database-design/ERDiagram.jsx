import Mermaid from '@theme/Mermaid';

const diagram = `
erDiagram

  AdminUser {
    string id PK "cuid()"
    string email UK "login identifier"
    string passwordHash "bcrypt"
    string name "display name"
    datetime createdAt
    datetime lastLoginAt
  }

  Agency {
    string id PK "cuid()"
    string name "e.g. HYBE"
    string slug UK "e.g. hybe"
    string country "ISO 3166-1 e.g. KR"
    string logoUrl "nullable"
    datetime createdAt
    string createdBy FK "nullable → AdminUser"
    datetime updatedAt
    string updatedBy FK "nullable → AdminUser"
  }

  Artist {
    string id PK "cuid()"
    string name "e.g. BTS"
    string slug UK "e.g. bts"
    string agencyId FK "nullable → Agency"
    enum artistType "GIRL_GROUP etc"
    string imageUrl "nullable"
    string country "ISO code, nullable"
    datetime createdAt
    string createdBy FK "nullable → AdminUser"
    datetime updatedAt
    string updatedBy FK "nullable → AdminUser"
  }

  Store {
    string id PK "cuid()"
    string name "e.g. Weverse Shop"
    string slug UK "e.g. weverse-shop"
    enum storeType "ONLINE_SHOP etc"
    string country "ISO code, nullable"
    string url "nullable"
    datetime createdAt
    string createdBy FK "nullable → AdminUser"
    datetime updatedAt
    string updatedBy FK "nullable → AdminUser"
  }

  Event {
    string id PK "cuid()"
    string slug UK "artist+title+date"
    string title "event name"
    string artistId FK "→ Artist"
    string storeId FK "nullable → Store"
    enum eventType "ONLINE / OFFLINE / HYBRID"
    enum status "UPCOMING / ONGOING / ENDED"
    enum applyMethod "nullable — method of entry"
    string applicationDetail "nullable — free text"
    boolean isPublic "default true"
    boolean isOnline "default false"
    datetime applicationStart "nullable"
    datetime applicationEnd "nullable"
    datetime eventDate "nullable"
    datetime winnerDate "nullable"
    string location "nullable — venue name"
    string locationDetail "nullable — address or URL"
    string applicationUrl "nullable — apply link"
    string noticeUrl "nullable — official notice"
    string imageUrl "nullable — thumbnail"
    string bannerUrl "nullable — banner"
    tsvector searchVector "GIN indexed, auto-updated"
    datetime createdAt
    string createdBy FK "nullable → AdminUser"
    datetime updatedAt
    string updatedBy FK "nullable → AdminUser"
  }

  Agency    ||--o{ Artist    : "manages"
  Artist    ||--o{ Event     : "performs in"
  Store     ||--o{ Event     : "hosts"
  AdminUser ||--o{ Agency    : "createdBy / updatedBy"
  AdminUser ||--o{ Artist    : "createdBy / updatedBy"
  AdminUser ||--o{ Store     : "createdBy / updatedBy"
  AdminUser ||--o{ Event     : "createdBy / updatedBy"
`;

export default function ERDiagram() {
    return (
        <div style={{ margin: '24px 0' }}>
            <Mermaid value={diagram} />
        </div>
    );
}